export interface NameCardData {
    name: string;
    num: number;
}
export interface NameDecklist {
    monsters: NameCardData[];
    spells: NameCardData[];
    traps: NameCardData[];
    extras: NameCardData[];
    sides: NameCardData[];
}
export type NameDecklistEntries = [keyof NameDecklist, NameCardData[]][];

export interface IdCardData {
    id: number;
    num: number;
}
export interface IdDecklist {
    mains: IdCardData[];
    extras: IdCardData[];
    sides: IdCardData[];
}

export type IdDecklistEntries = [keyof IdDecklist, IdCardData[]][];

export interface YGOCard extends NameCardData, IdCardData {
    desc: string;
    type: string;
}

export type YGODecklist = Record<keyof NameDecklist, YGOCard[]>;

export type YGOWordcount = Pick<YGOCard, 'id' | 'name' | 'desc'> & {
    wordCount: number
}

export type YGOBanlist = {
    [id: number]: 0 | 1 | 2,
}
export type BanlistPair = [keyof YGOBanlist, YGOBanlist[keyof YGOBanlist]];
