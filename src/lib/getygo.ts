import type { Database } from "sql.js";
import type { IdDecklist, IdDecklistEntries, NameDecklist, NameDecklistEntries, YGOCard, YGODecklist } from "../interfaces/ygo";
import { getYDBDecklist } from "./ydb";
import { getYDKEDecklist } from "./ydke";

const cardTypes = {
    monster: {
        flag: 1 << 0,
        text: 'monster',
    },
    spell: {
        flag: 1 << 1,
        text: 'spell',
    },
    trap: {
        flag: 1 << 2,
        text: 'trap',
    },
    na: {
        flag: 1 << 3,
        text: 'N/A',
    },
};

/**
 * Helper function to transform db type to card type
 * @param row a row matching YGOCard from db query
 * @returns a row applied with human readable card type
 */
function mapDBTypeToCardType(row: YGOCard): YGOCard {
    let type = '';

    if (!row.type || (+row.type & cardTypes.na.flag) === cardTypes.na.flag)
        type = cardTypes.na.text;
    else if ((+row.type & cardTypes.monster.flag) === cardTypes.monster.flag)
        type = cardTypes.monster.text;
    else if ((+row.type & cardTypes.spell.flag) === cardTypes.spell.flag)
        type = cardTypes.spell.text;
    else if ((+row.type & cardTypes.trap.flag) === cardTypes.trap.flag)
        type = cardTypes.trap.text;

    return { ...row, type };
}

/**
 * Gets extra data for cards with names in the decklist.
 * 
 * Should only used for Neuron / YGO Card DB, since they don't use the passcode ids.
 * @throws database error
 * @param cdb card database
 * @param dl decklist of cards with PK of names
 * @returns a full decklist with data from cdb
 */
export async function getDBAdditionsByName(cdb: Database, dl: NameDecklist): Promise<YGODecklist> {
    const result = {} as YGODecklist;

    for (const [cardType, cards] of Object.entries(
        dl
    ) as NameDecklistEntries) {
        try {
            cdb.run("DROP TABLE IF EXISTS current_cards_name;");
            cdb.run("CREATE TEMP TABLE current_cards_name (name TEXT, num INTEGER);");

            cdb.run("BEGIN TRANSACTION;");
            for (const card of cards) {
                cdb.run("INSERT INTO current_cards_name VALUES (?, ?);", [
                    card.name,
                    card.num,
                ]);
            }
            cdb.run("COMMIT;");

            const stmt = cdb.prepare(`
                with arn as ( 
                    select t.id, t.name, cc.num, t.desc, d.type,
                    ROW_NUMBER() OVER (PARTITION BY t.name ORDER BY length(t.desc) ASC) AS rn
                    from texts t
                    inner join datas d
                        on t.id = d.id
                    inner join current_cards_name cc
                        on t.name = cc.name
                )
                select id, name, num, desc, type
                from arn 
                where rn = 1
            `);

            const rows = [] as YGOCard[];
            while (stmt.step()) {
                const row = stmt.getAsObject() as unknown as YGOCard;
                rows.push(row);
            }
            stmt.free();

            result[cardType] = rows.map(mapDBTypeToCardType);
        } catch (error) {
            throw new Error('Issue obtaining data from database');
        }
    }

    return result;
}

/**
 * Gets extra data for cards with ids in the decklist.
 * 
 * Unofficial platforms give the passcode information, which is used here.
 * @throws database error
 * @param cdb card database
 * @param dl decklist of cards with PK of ids
 * @returns a full decklist with data from cdb
 */
export async function getDBAdditionsById(cdb: Database, dl: IdDecklist): Promise<YGODecklist> {
    const result = {} as YGODecklist;

    const dbRet = {} as Record<keyof IdDecklist, YGOCard[]>;

    for (const [cardType, cards] of Object.entries(
        dl
    ) as IdDecklistEntries) {
        try {
            cdb.run("DROP TABLE IF EXISTS current_cards_id;");
            cdb.run("CREATE TEMP TABLE current_cards_id (id INTEGER, num INTEGER);");

            cdb.run("BEGIN TRANSACTION;");
            for (const card of cards) {
                cdb.run("INSERT INTO current_cards_id VALUES (?, ?);", [
                    card.id,
                    card.num,
                ]);
            }
            cdb.run("COMMIT;");

            const stmt = cdb.prepare(`
                with arn as ( 
                    select t.id, t.name, cc.num, t.desc, d.type,
                    ROW_NUMBER() OVER (PARTITION BY t.name ORDER BY length(t.desc) ASC) AS rn
                    from texts t
                    inner join datas d
                        on t.id = d.id
                    inner join current_cards_id cc
                        on t.id = cc.id
                )
                select id, name, num, desc, type
                from arn 
                where rn = 1
            `);

            const rows = [] as YGOCard[];
            while (stmt.step()) {
                const row = stmt.getAsObject() as unknown as YGOCard;
                rows.push(row);
            }
            stmt.free();

            dbRet[cardType] = rows.map(mapDBTypeToCardType);
        } catch (error) {
            throw new Error('Issue obtaining data from database');
        }
    }

    result.monsters = dbRet.mains.filter(c => c.type === cardTypes.monster.text);
    result.spells = dbRet.mains.filter(c => c.type === cardTypes.spell.text);
    result.traps = dbRet.mains.filter(c => c.type === cardTypes.trap.text);
    result.extras = dbRet.extras;
    result.sides = dbRet.sides;

    // console.log({ dbRet, result });

    return result;
}

/**
 * Takes url from users and attempts to get a full decklist for analysis.
 * 
 * @throws errors about parsing, invalid urls, etc.
 * @param db card database
 * @param dispatch_url url from the user to dispatch internally
 * @returns decklist of YGOCard to use for analysis
 */
export async function getYGODecklist(db: Database, dispatch_url: string): Promise<YGODecklist> {
    const urlObj = new URL(dispatch_url);

    if (urlObj.origin === "https://www.db.yugioh-card.com") {
        const ydbDL = await getYDBDecklist(urlObj);
        return await getDBAdditionsByName(db, ydbDL);
    } else if (urlObj.protocol === "ydke:") {
        const ydkeDL = await getYDKEDecklist(urlObj);
        return await getDBAdditionsById(db, ydkeDL);
    } else {
        throw new Error("Invalid or unsupported decklist provided");
    }
}
