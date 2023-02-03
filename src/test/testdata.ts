import type { CentralTendencies } from "../interfaces/common";
import type { YGODecklist, YGOWordcount } from "../interfaces/ygo";

//#region testingDecks

type TestingDeckData = {
    decklist: YGODecklist,
    wordCounts: YGOWordcount[],
    mct: CentralTendencies
};

type SampleDecks = 'dddData' | 'srData' | 'pkfireData'

// https://www.db.yugioh-card.com/yugiohdb/member_deck.action?ope=1&cgid=15e16e034ce4d4822074831588f10839&dno=11
const dddData: TestingDeckData = {
    "decklist": {
        "monsters": [
            {
                "id": 39153655,
                "name": "D/D Cerberus",
                "num": 1,
                "desc": "[ Pendulum Effect ]\nOnce per turn: You can target 1 \"D/D\" monster you control; change its Level to 4, and if you do, it gains 400 ATK and DEF (even if this card leaves the field).\n----------------------------------------\n[ Monster Effect ]\nWhen this card is Pendulum Summoned from the hand, while you control a \"D/D\" monster other than \"D/D Cerberus\": You can target 1 Continuous Spell Card in your Graveyard; add it to your hand."
            },
            {
                "id": 32349062,
                "name": "D/D Dog",
                "num": 1,
                "desc": "[ Pendulum Effect ]\r\nYou can target 1 Fusion, Synchro, or Xyz Monster your opponent controls; negate its effects until the end of this turn, then destroy this card. You can only use this effect of \"D/D Dog\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nOnce per turn, if your opponent Special Summons a Fusion, Synchro, or Xyz Monster(s) (except during the Damage Step): You can target 1 of those monsters; this turn, that face-up monster cannot attack, also its effects are negated."
            },
            {
                "id": 33334269,
                "name": "D/D Ghost",
                "num": 1,
                "desc": "If this card is sent to the Graveyard: You can target 1 \"D/D\" monster or \"Dark Contract\" card in your Graveyard, except \"D/D Ghost\"; send 1 card from your Deck to the Graveyard with that name. If this card is banished: You can target 1 of your banished \"D/D\" monsters or \"Dark Contract\" cards, except \"D/D Ghost\"; return it to the Graveyard."
            },
            {
                "id": 28406301,
                "name": "D/D Gryphon",
                "num": 3,
                "desc": "[ Pendulum Effect ]\r\nYou can target 1 Fiend monster you control; it gains 500 ATK (until the end of this turn) for each \"Dark Contract\" Spell/Trap with different names currently on your field or in your GY, then destroy this card. You can only use this effect of \"D/D Gryphon\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf you control a \"D/D\" monster: You can Special Summon this card from your hand in Defense Position. If this card is Pendulum Summoned: You can discard 1 \"D/D\" or \"Dark Contract\" card; draw 1 card. If this card is Special Summoned from the GY: You can add 1 \"D/D\" card from your Deck to your hand, except \"D/D Gryphon\". You can only use each effect of \"D/D Gryphon\" once per turn."
            },
            {
                "id": 19580308,
                "name": "D/D Lamia",
                "num": 1,
                "desc": "If this card is in your hand or GY: You can send 1 \"D/D\" or \"Dark Contract\" card from your hand or face-up field to the GY, except \"D/D Lamia\"; Special Summon this card, but banish it when it leaves the field. You can only use this effect of \"D/D Lamia\" once per turn."
            },
            {
                "id": 72291412,
                "name": "D/D Necro Slime",
                "num": 1,
                "desc": "If this card is in your GY: You can Fusion Summon 1 \"D/D/D\" Fusion Monster from your Extra Deck, by banishing Fusion Materials mentioned on it from your GY, including this card. You can only use this effect of \"D/D Necro Slime\" once per turn."
            },
            {
                "id": 72181263,
                "name": "D/D Orthros",
                "num": 2,
                "desc": "[ Pendulum Effect ]\nOnce per turn: You can target 1 Spell/Trap Card on the field and 1 other \"D/D\" or \"Dark Contract\" card you control; destroy them.\n----------------------------------------\n[ Monster Effect ]\nWhen you take battle or effect damage: You can Special Summon this card from your hand. If this card is Special Summoned to your field, you cannot Special Summon monsters for the rest of this turn, except Fiend-Type monsters."
            },
            {
                "id": 46796664,
                "name": "D/D Savant Copernicus",
                "num": 3,
                "desc": "[ Pendulum Effect ]\r\nYou cannot Pendulum Summon monsters, except \"D/D\" monsters. This effect cannot be negated. Once, while this card is in your Pendulum Zone, you can negate an activated Spell effect that would inflict damage to you, then destroy this card.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf this card is Normal or Special Summoned: You can send 1 \"D/D\" or \"Dark Contract\" card from your Deck to the GY, except \"D/D Savant Copernicus\". You can only use this effect of \"D/D Savant Copernicus\" once per turn."
            },
            {
                "id": 11609969,
                "name": "D/D Savant Kepler",
                "num": 3,
                "desc": "[ Pendulum Effect ]\nYou cannot Pendulum Summon monsters, except \"D/D\" monsters. This effect cannot be negated. Once per turn, during your Standby Phase: Reduce this card's Pendulum Scale by 2 (min. 1), then destroy all monsters you control with a Level greater than or equal to this card's Pendulum Scale, except \"D/D\" monsters.\n----------------------------------------\n[ Monster Effect ]\nIf this card is Normal or Special Summoned: You can activate 1 of these effects. You can only use this effect of \"D/D Savant Kepler\" once per turn.\n●Target 1 other \"D/D\" card you control; return it to the hand.\n●Add 1 \"Dark Contract\" card from your Deck to your hand."
            },
            {
                "id": 41546,
                "name": "D/D Savant Thomas",
                "num": 1,
                "desc": "[ Pendulum Effect ]\r\nDuring your Main Phase: You can add 1 face-up \"D/D\" Pendulum Monster from your Extra Deck to your hand. You can only use this effect of \"D/D Savant Thomas\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nYou can target 1 \"D/D\" card in your Pendulum Zone; destroy that card, and if you do, Special Summon 1 Level 8 \"D/D/D\" monster from your Deck in Defense Position, but for the rest of this turn, its effects (if any) are negated, also any battle damage your opponent takes becomes halved. You can only use this effect of \"D/D Savant Thomas\" once per turn."
            },
            {
                "id": 45206713,
                "name": "D/D Swirl Slime",
                "num": 3,
                "desc": "If this card is in your hand: You can Fusion Summon 1 \"D/D/D\" Fusion Monster from your Extra Deck, using monsters from your hand as Fusion Materials, including this card. You can banish this card from your GY; Special Summon 1 \"D/D\" monster from your hand. You can only use each effect of \"D/D Swirl Slime\" once per turn."
            },
            {
                "id": 59123937,
                "name": "D/D Vice Typhon",
                "num": 1,
                "desc": "When this card is Normal Summoned: You can Tribute 1 \"D/D\" monster; Special Summon 1 Level 7 \"D/D/D\" monster from your Deck. During your Main Phase, if this card is in the GY because it was sent there this turn: You can Fusion Summon 1 Level 8 or higher \"D/D/D\" Fusion Monster from your Extra Deck, by banishing Fusion Materials listed on it from your GY, including this card. You can only use each effect of \"D/D Vice Typhon\" once per turn."
            },
            {
                "id": 74069667,
                "name": "D/D/D Oblivion King Abyss Ragnarok",
                "num": 1,
                "desc": "[ Pendulum Effect ]\r\nIf you Special Summon a \"D/D\" monster(s), except during the Damage Step: You can target 1 \"D/D\" monster in your Graveyard; any battle damage your opponent takes becomes halved for the rest of this turn, also Special Summon that monster, and if you do, take 1000 damage. You can only use this effect of \"D/D/D Oblivion King Abyss Ragnarok\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf this card is Normal or Special Summoned: You can target 1 \"D/D/D\" monster in your Graveyard; Special Summon it. You can only use this effect of \"D/D/D Oblivion King Abyss Ragnarok\" once per turn. Once per turn: You can Tribute 1 other \"D/D\" monster, then target 1 monster your opponent controls; banish it."
            },
            {
                "id": 97268402,
                "name": "Effect Veiler",
                "num": 3,
                "desc": "During your opponent's Main Phase (Quick Effect): You can send this card from your hand to the GY, then target 1 Effect Monster your opponent controls; negate the effects of that face-up monster your opponent controls, until the end of this turn."
            },
            {
                "id": 59438930,
                "name": "Ghost Ogre & Snow Rabbit",
                "num": 3,
                "desc": "When a monster on the field activates its effect, or when a Spell/Trap that is already face-up on the field activates its effect (Quick Effect): You can send this card from your hand or field to the GY; destroy that card on the field. You can only use this effect of \"Ghost Ogre & Snow Rabbit\" once per turn."
            },
            {
                "id": 40227329,
                "name": "Go! - D/D/D Divine Zero King Rage",
                "num": 1,
                "desc": "[ Pendulum Effect ]\r\nIf you would take effect damage, you take no damage. If you Normal Summon 1 Level 5 or higher \"D/D\" monster, you can do it without Tributing. You can only use each Pendulum Effect of \"Go! - D/D/D Divine Zero King Rage\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nWhen this card declares an attack, if your opponent's LP is 4000 or less: You can make this card gain ATK equal to your opponent's LP, until the end of this turn. Cannot be destroyed by battle, also you take no damage from battles involving this card.\r\nYou can Tribute 1 other monster; apply 1 of these effects until the end of this turn.\r\n● This card can attack directly.\r\n● Your opponent cannot activate the effects of cards that are in a Spell & Trap Zone.\r\n● Your opponent cannot activate the effects of cards that are in their hand or GY.\r\n\r\n* The above text is unofficial and describes the card's functionality in the OCG."
            }
        ],
        "spells": [
            {
                "id": 1475311,
                "name": "Allure of Darkness",
                "num": 1,
                "desc": "Draw 2 cards, then banish 1 DARK monster from your hand, or, if you do not have any in your hand, send your entire hand to the GY."
            },
            {
                "id": 24224830,
                "name": "Called by the Grave",
                "num": 1,
                "desc": "Target 1 monster in your opponent's GY; banish it, and if you do, until the end of the next turn, its effects are negated, as well as the activated effects and effects on the field of monsters with the same original name."
            },
            {
                "id": 33814281,
                "name": "Dark Contract with Patent License",
                "num": 1,
                "desc": "If your opponent Special Summons a monster(s) with the same card type (Fusion, Synchro, Xyz, or Link) as a \"D/D/D\" monster you control (except during the Damage Step): You can inflict 1000 damage to your opponent, also, while this card is on the field, your opponent cannot Special Summon monsters with the same card type as that Special Summoned monster for the rest of this turn. If this card is sent to the GY: You can add 1 \"D/D\" monster from your GY, or 1 face-up \"D/D\" Pendulum Monster from your Extra Deck, to your hand. You can only use this effect of \"Dark Contract with Patent License\" once per turn."
            },
            {
                "id": 46372010,
                "name": "Dark Contract with the Gate",
                "num": 3,
                "desc": "During your Main Phase: You can add 1 \"D/D\" monster from your Deck to your hand. You can only use this effect of \"Dark Contract with the Gate\" once per turn. Once per turn, during your Standby Phase: Take 1000 damage."
            },
            {
                "id": 73360025,
                "name": "Dark Contract with the Swamp King",
                "num": 1,
                "desc": "During your Main Phase: You can Fusion Summon 1 Fiend Fusion Monster from your Extra Deck, using monsters from your hand or field as material. You can only use this effect of \"Dark Contract with the Swamp King\" once per turn. If Summoning a \"D/D\" Fusion Monster this way, you can also banish monsters from your GY as material. Once per turn, during your Standby Phase: Take 1000 damage."
            },
            {
                "id": 81439173,
                "name": "Foolish Burial",
                "num": 1,
                "desc": "Send 1 monster from your Deck to the GY."
            },
            {
                "id": 2295440,
                "name": "One for One",
                "num": 1,
                "desc": "Send 1 monster from your hand to the GY; Special Summon 1 Level 1 monster from your hand or Deck."
            },
            {
                "id": 33907039,
                "name": "Piri Reis Map",
                "num": 3,
                "desc": "At the start of your Main Phase 1: Add 1 monster with 0 ATK from your Deck to your hand, but halve your LP. After adding it to your hand, until the end of the next turn after this card was activated, you cannot activate the added monster's effects, or the effects of cards with its name, until you Normal Summon that monster or a card with its name."
            }
        ],
        "traps": [
            {
                "id": 91781484,
                "name": "D/D/D Headhunt",
                "num": 1,
                "desc": "If you control a \"D/D/D\" monster: Target 1 face-up monster your opponent controls; take control of it until the End Phase of the next turn, but its effects are negated, it cannot declare an attack, also if it is a monster Special Summoned from the Extra Deck, it is also treated as a \"D/D/D\" monster. You can only activate 1 \"D/D/D Headhunt\" per turn."
            },
            {
                "id": 9030160,
                "name": "Dark Contract with the Eternal Darkness",
                "num": 1,
                "desc": "While you have 2 \"D/D\" cards in your Pendulum Zones, your opponent cannot target monsters on the field with Spell/Trap effects, Tribute them for a Tribute Summon, nor use them as Materials for a Fusion, Synchro, or Xyz Summon. Once per turn, during your Standby Phase: Take 1000 damage."
            }
        ],
        "extras": [
            {
                "id": 9024198,
                "name": "D/D/D Abyss King Gilgamesh",
                "num": 3,
                "desc": "2 \"D/D\" monsters\nIf this card is Special Summoned: You can activate this effect; you cannot Special Summon monsters for the rest of this turn, except \"D/D\" monsters, also place 2 \"D/D\" Pendulum Monsters with different names from your Deck in your Pendulum Zones, and if you do, take 1000 damage. If this Link Summoned card is destroyed by battle with an opponent's attacking monster, or by an opponent's card effect while in its owner's Monster Zone: You can Special Summon 1 \"D/D\" monster from your Extra Deck or GY in Defense Position. You can only use each effect of \"D/D/D Abyss King Gilgamesh\" once per turn."
            },
            {
                "id": 44852429,
                "name": "D/D/D Cursed King Siegfried",
                "num": 1,
                "desc": "1 Tuner + 1 or more non-Tuner \"D/D\" monsters\nDuring either player's turn: You can target 1 face-up Spell/Trap Card on the field; that target has its effects negated, until the next Standby Phase. You can only use this effect of \"D/D/D Cursed King Siegfried\" once per turn. If this card is destroyed by battle or card effect and sent to the Graveyard: Gain 1000 LP for each \"Dark Contract\" card you control."
            },
            {
                "id": 46593546,
                "name": "D/D/D Deviser King Deus Machinex",
                "num": 2,
                "desc": "[ Pendulum Effect ]\r\nWhile you have a card in your other Pendulum Zone: You can target 1 Pendulum Monster you control or in your GY; Special Summon the card in your other Pendulum Zone, and if you do, place that targeted Pendulum Monster in your Pendulum Zone. You can only use this effect of \"D/D/D Deviser King Deus Machinex\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\n2 Level 10 Fiend monsters\r\nYou can also Xyz Summon this card by using a \"D/D/D\" monster you control as material. (Transfer its materials to this card.) You can only control 1 \"D/D/D Deviser King Deus Machinex\" in your Monster Zone. Once per Chain, when a Monster Card your opponent controls activates its effect (Quick Effect): You can either detach 2 materials from this card, or destroy 1 \"Dark Contract\" card you control, and if you do, attach that opponent's card to this card as material. Once per turn, during your Standby Phase: You can place this card in your Pendulum Zone."
            },
            {
                "id": 15939229,
                "name": "D/D/D Duo-Dawn King Kali Yuga",
                "num": 1,
                "desc": "2 Level 8 \"D/D\" monsters\r\nAfter this card is Xyz Summoned, for the rest of this turn, all other cards' effects on the field are negated, and neither player can activate the effects of other cards that are on the field, or activate Set Spells/Traps. Once per turn (Quick Effect): You can detach 1 material from this card; destroy all Spells and Traps on the field. You can detach 1 material from this card, then target 1 \"Dark Contract\" Spell/Trap in your GY; Set that target.\r\n\r\n* The above text is unofficial and describes the card's functionality in the OCG."
            },
            {
                "id": 16006416,
                "name": "D/D/D Flame High King Genghis",
                "num": 1,
                "desc": "1 Level 5 or higher \"D/D\" monster + 1 \"D/D\" monster\nIf another \"D/D\" monster(s) is Normal or Special Summoned to your field while you control this monster (except during the Damage Step): You can target 1 \"D/D\" monster in your GY; Special Summon it. You can only use this effect of \"D/D/D Flame High King Genghis\" once per turn. Once per your turn, when a Spell/Trap Card, or its effect, is activated (Quick Effect): You can negate the activation."
            },
            {
                "id": 74583607,
                "name": "D/D/D Flame King Genghis",
                "num": 2,
                "desc": "2 \"D/D\" monsters\nIf another \"D/D\" monster(s) is Special Summoned to your field, while you control this face-up card (except during the Damage Step): You can target 1 \"D/D\" monster in your Graveyard; Special Summon it. You can only use this effect of \"D/D/D Flame King Genghis\" once per turn. If this card is destroyed by battle, or if this card in its owner's possession is destroyed by an opponent's card effect: You can target 1 \"Dark Contract\" card in your Graveyard; add it to your hand."
            },
            {
                "id": 71612253,
                "name": "D/D/D Marksman King Tell",
                "num": 1,
                "desc": "2 Level 5 monsters\nYou can also Xyz Summon this card by using a Rank 4 \"D/D/D\" Xyz Monster you control as the Xyz Material. (Xyz Materials attached to that monster also become Xyz Materials on this card.) Once per turn, during either player's turn, if you took any effect damage this turn: You can detach 1 Xyz Material from this card, then target 1 face-up monster on the field; it loses 1000 ATK and DEF, and if it does, inflict 1000 damage to your opponent. If this card is sent from the field to the Graveyard: You can send 1 \"D/D\" or \"Dark Contract\" card from your Deck to the Graveyard."
            },
            {
                "id": 82956492,
                "name": "D/D/D Oracle King d'Arc",
                "num": 1,
                "desc": "2 \"D/D\" monsters\nAny effect that would inflict damage to you makes you gain that much LP, instead."
            },
            {
                "id": 79559912,
                "name": "D/D/D Wave High King Caesar",
                "num": 1,
                "desc": "2 Level 6 Fiend monsters\nWhen a Spell/Trap Card, or monster effect, is activated that includes an effect that Special Summons a monster (Quick Effect): You can detach 1 material from this card; negate the activation, and if you do, destroy that card, then you can make 1 other \"D/D\" monster you control and this card gain 1800 ATK until the end of this turn. If this card is sent from the field to the GY: You can add 1 \"Dark Contract\" card from your Deck to your hand."
            },
            {
                "id": 3758046,
                "name": "D/D/D Wave King Caesar",
                "num": 1,
                "desc": "2 Level 4 Fiend-Type monsters\nDuring either player's turn: You can detach 1 Xyz Material from this card; at the end of the Battle Phase, Special Summon from your Graveyard as many monsters destroyed this turn as possible, but during the next Standby Phase, take 1000 damage for each monster Special Summoned by this effect. If this card is sent from the field to the Graveyard: You can add 1 \"Dark Contract\" card from your Deck to your hand. You can only use each effect of \"D/D/D Wave King Caesar\" once per turn."
            },
            {
                "id": 8264361,
                "name": "Dharc the Dark Charmer, Gloomy",
                "num": 1,
                "desc": "2 monsters, including a DARK monster\r\n(This card is always treated as a \"Familiar-Possessed\" card.)\r\nYou can target 1 DARK monster in your opponent's GY; Special Summon it to your zone this card points to. If this Link Summoned card is destroyed by battle, or is destroyed by an opponent's card effect while in its owner's Monster Zone: You can add 1 DARK monster with 1500 or less DEF from your Deck to your hand. You can only use each effect of \"Dharc the Dark Charmer, Gloomy\" once per turn."
            }
        ],
        "sides": [
            {
                "id": 34267821,
                "name": "Artifact Lancea",
                "num": 3,
                "desc": "You can Set this card from your hand to your Spell & Trap Zone as a Spell. During your opponent's turn, if this Set card in the Spell & Trap Zone is destroyed and sent to your GY: Special Summon it. During your opponent's turn (Quick Effect): You can Tribute this card from your hand or face-up field; neither player can banish cards for the rest of this turn."
            },
            {
                "id": 24508238,
                "name": "D.D. Crow",
                "num": 3,
                "desc": "(Quick Effect): You can discard this card to the GY, then target 1 card in your opponent's GY; banish that target."
            },
            {
                "id": 37209439,
                "name": "Dark Contract with Errors",
                "num": 1,
                "desc": "Once per turn, if you control a \"D/D\" monster: You can negate all Trap Card effects on the field (other than this card's) for the rest of this turn (even if this card leaves the field). Once per turn, during your Standby Phase: Take 1000 damage."
            },
            {
                "id": 33814281,
                "name": "Dark Contract with Patent License",
                "num": 1,
                "desc": "If your opponent Special Summons a monster(s) with the same card type (Fusion, Synchro, Xyz, or Link) as a \"D/D/D\" monster you control (except during the Damage Step): You can inflict 1000 damage to your opponent, also, while this card is on the field, your opponent cannot Special Summon monsters with the same card type as that Special Summoned monster for the rest of this turn. If this card is sent to the GY: You can add 1 \"D/D\" monster from your GY, or 1 face-up \"D/D\" Pendulum Monster from your Extra Deck, to your hand. You can only use this effect of \"Dark Contract with Patent License\" once per turn."
            },
            {
                "id": 18144506,
                "name": "Harpie's Feather Duster",
                "num": 1,
                "desc": "Destroy all Spells and Traps your opponent controls."
            },
            {
                "id": 10045474,
                "name": "Infinite Impermanence",
                "num": 3,
                "desc": "Target 1 face-up monster your opponent controls; negate its effects (until the end of this turn), then, if this card was Set before activation and is on the field at resolution, for the rest of this turn all other Spell/Trap effects in this column are negated. If you control no cards, you can activate this card from your hand."
            },
            {
                "id": 43898403,
                "name": "Twin Twisters",
                "num": 3,
                "desc": "Discard 1 card, then target up to 2 Spells/Traps on the field; destroy them."
            }
        ]
    },
    "wordCounts": [
        {
            "id": 40227329,
            "name": "Go! - D/D/D Divine Zero King Rage",
            "desc": "[ Pendulum Effect ]\r\nIf you would take effect damage, you take no damage. If you Normal Summon 1 Level 5 or higher \"D/D\" monster, you can do it without Tributing. You can only use each Pendulum Effect of \"Go! - D/D/D Divine Zero King Rage\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nWhen this card declares an attack, if your opponent's LP is 4000 or less: You can make this card gain ATK equal to your opponent's LP, until the end of this turn. Cannot be destroyed by battle, also you take no damage from battles involving this card.\r\nYou can Tribute 1 other monster; apply 1 of these effects until the end of this turn.\r\n● This card can attack directly.\r\n● Your opponent cannot activate the effects of cards that are in a Spell & Trap Zone.\r\n● Your opponent cannot activate the effects of cards that are in their hand or GY.\r\n\r\n* The above text is unofficial and describes the card's functionality in the OCG.",
            "wordCount": 162
        },
        {
            "id": 46593546,
            "name": "D/D/D Deviser King Deus Machinex",
            "desc": "[ Pendulum Effect ]\r\nWhile you have a card in your other Pendulum Zone: You can target 1 Pendulum Monster you control or in your GY; Special Summon the card in your other Pendulum Zone, and if you do, place that targeted Pendulum Monster in your Pendulum Zone. You can only use this effect of \"D/D/D Deviser King Deus Machinex\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\n2 Level 10 Fiend monsters\r\nYou can also Xyz Summon this card by using a \"D/D/D\" monster you control as material. (Transfer its materials to this card.) You can only control 1 \"D/D/D Deviser King Deus Machinex\" in your Monster Zone. Once per Chain, when a Monster Card your opponent controls activates its effect (Quick Effect): You can either detach 2 materials from this card, or destroy 1 \"Dark Contract\" card you control, and if you do, attach that opponent's card to this card as material. Once per turn, during your Standby Phase: You can place this card in your Pendulum Zone.",
            "wordCount": 161
        },
        {
            "id": 28406301,
            "name": "D/D Gryphon",
            "desc": "[ Pendulum Effect ]\r\nYou can target 1 Fiend monster you control; it gains 500 ATK (until the end of this turn) for each \"Dark Contract\" Spell/Trap with different names currently on your field or in your GY, then destroy this card. You can only use this effect of \"D/D Gryphon\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf you control a \"D/D\" monster: You can Special Summon this card from your hand in Defense Position. If this card is Pendulum Summoned: You can discard 1 \"D/D\" or \"Dark Contract\" card; draw 1 card. If this card is Special Summoned from the GY: You can add 1 \"D/D\" card from your Deck to your hand, except \"D/D Gryphon\". You can only use each effect of \"D/D Gryphon\" once per turn.",
            "wordCount": 122
        },
        {
            "id": 74069667,
            "name": "D/D/D Oblivion King Abyss Ragnarok",
            "desc": "[ Pendulum Effect ]\r\nIf you Special Summon a \"D/D\" monster(s), except during the Damage Step: You can target 1 \"D/D\" monster in your Graveyard; any battle damage your opponent takes becomes halved for the rest of this turn, also Special Summon that monster, and if you do, take 1000 damage. You can only use this effect of \"D/D/D Oblivion King Abyss Ragnarok\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf this card is Normal or Special Summoned: You can target 1 \"D/D/D\" monster in your Graveyard; Special Summon it. You can only use this effect of \"D/D/D Oblivion King Abyss Ragnarok\" once per turn. Once per turn: You can Tribute 1 other \"D/D\" monster, then target 1 monster your opponent controls; banish it.",
            "wordCount": 116
        },
        {
            "id": 71612253,
            "name": "D/D/D Marksman King Tell",
            "desc": "2 Level 5 monsters\nYou can also Xyz Summon this card by using a Rank 4 \"D/D/D\" Xyz Monster you control as the Xyz Material. (Xyz Materials attached to that monster also become Xyz Materials on this card.) Once per turn, during either player's turn, if you took any effect damage this turn: You can detach 1 Xyz Material from this card, then target 1 face-up monster on the field; it loses 1000 ATK and DEF, and if it does, inflict 1000 damage to your opponent. If this card is sent from the field to the Graveyard: You can send 1 \"D/D\" or \"Dark Contract\" card from your Deck to the Graveyard.",
            "wordCount": 112
        },
        {
            "id": 33814281,
            "name": "Dark Contract with Patent License",
            "desc": "If your opponent Special Summons a monster(s) with the same card type (Fusion, Synchro, Xyz, or Link) as a \"D/D/D\" monster you control (except during the Damage Step): You can inflict 1000 damage to your opponent, also, while this card is on the field, your opponent cannot Special Summon monsters with the same card type as that Special Summoned monster for the rest of this turn. If this card is sent to the GY: You can add 1 \"D/D\" monster from your GY, or 1 face-up \"D/D\" Pendulum Monster from your Extra Deck, to your hand. You can only use this effect of \"Dark Contract with Patent License\" once per turn.",
            "wordCount": 111
        },
        {
            "id": 33814281,
            "name": "Dark Contract with Patent License",
            "desc": "If your opponent Special Summons a monster(s) with the same card type (Fusion, Synchro, Xyz, or Link) as a \"D/D/D\" monster you control (except during the Damage Step): You can inflict 1000 damage to your opponent, also, while this card is on the field, your opponent cannot Special Summon monsters with the same card type as that Special Summoned monster for the rest of this turn. If this card is sent to the GY: You can add 1 \"D/D\" monster from your GY, or 1 face-up \"D/D\" Pendulum Monster from your Extra Deck, to your hand. You can only use this effect of \"Dark Contract with Patent License\" once per turn.",
            "wordCount": 111
        },
        {
            "id": 11609969,
            "name": "D/D Savant Kepler",
            "desc": "[ Pendulum Effect ]\nYou cannot Pendulum Summon monsters, except \"D/D\" monsters. This effect cannot be negated. Once per turn, during your Standby Phase: Reduce this card's Pendulum Scale by 2 (min. 1), then destroy all monsters you control with a Level greater than or equal to this card's Pendulum Scale, except \"D/D\" monsters.\n----------------------------------------\n[ Monster Effect ]\nIf this card is Normal or Special Summoned: You can activate 1 of these effects. You can only use this effect of \"D/D Savant Kepler\" once per turn.\n●Target 1 other \"D/D\" card you control; return it to the hand.\n●Add 1 \"Dark Contract\" card from your Deck to your hand.",
            "wordCount": 110
        },
        {
            "id": 9024198,
            "name": "D/D/D Abyss King Gilgamesh",
            "desc": "2 \"D/D\" monsters\nIf this card is Special Summoned: You can activate this effect; you cannot Special Summon monsters for the rest of this turn, except \"D/D\" monsters, also place 2 \"D/D\" Pendulum Monsters with different names from your Deck in your Pendulum Zones, and if you do, take 1000 damage. If this Link Summoned card is destroyed by battle with an opponent's attacking monster, or by an opponent's card effect while in its owner's Monster Zone: You can Special Summon 1 \"D/D\" monster from your Extra Deck or GY in Defense Position. You can only use each effect of \"D/D/D Abyss King Gilgamesh\" once per turn.",
            "wordCount": 107
        },
        {
            "id": 15939229,
            "name": "D/D/D Duo-Dawn King Kali Yuga",
            "desc": "2 Level 8 \"D/D\" monsters\r\nAfter this card is Xyz Summoned, for the rest of this turn, all other cards' effects on the field are negated, and neither player can activate the effects of other cards that are on the field, or activate Set Spells/Traps. Once per turn (Quick Effect): You can detach 1 material from this card; destroy all Spells and Traps on the field. You can detach 1 material from this card, then target 1 \"Dark Contract\" Spell/Trap in your GY; Set that target.\r\n\r\n* The above text is unofficial and describes the card's functionality in the OCG.",
            "wordCount": 100
        },
        {
            "id": 41546,
            "name": "D/D Savant Thomas",
            "desc": "[ Pendulum Effect ]\r\nDuring your Main Phase: You can add 1 face-up \"D/D\" Pendulum Monster from your Extra Deck to your hand. You can only use this effect of \"D/D Savant Thomas\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nYou can target 1 \"D/D\" card in your Pendulum Zone; destroy that card, and if you do, Special Summon 1 Level 8 \"D/D/D\" monster from your Deck in Defense Position, but for the rest of this turn, its effects (if any) are negated, also any battle damage your opponent takes becomes halved. You can only use this effect of \"D/D Savant Thomas\" once per turn.",
            "wordCount": 97
        },
        {
            "id": 3758046,
            "name": "D/D/D Wave King Caesar",
            "desc": "2 Level 4 Fiend-Type monsters\nDuring either player's turn: You can detach 1 Xyz Material from this card; at the end of the Battle Phase, Special Summon from your Graveyard as many monsters destroyed this turn as possible, but during the next Standby Phase, take 1000 damage for each monster Special Summoned by this effect. If this card is sent from the field to the Graveyard: You can add 1 \"Dark Contract\" card from your Deck to your hand. You can only use each effect of \"D/D/D Wave King Caesar\" once per turn.",
            "wordCount": 93
        },
        {
            "id": 8264361,
            "name": "Dharc the Dark Charmer, Gloomy",
            "desc": "2 monsters, including a DARK monster\r\n(This card is always treated as a \"Familiar-Possessed\" card.)\r\nYou can target 1 DARK monster in your opponent's GY; Special Summon it to your zone this card points to. If this Link Summoned card is destroyed by battle, or is destroyed by an opponent's card effect while in its owner's Monster Zone: You can add 1 DARK monster with 1500 or less DEF from your Deck to your hand. You can only use each effect of \"Dharc the Dark Charmer, Gloomy\" once per turn.",
            "wordCount": 90
        },
        {
            "id": 79559912,
            "name": "D/D/D Wave High King Caesar",
            "desc": "2 Level 6 Fiend monsters\nWhen a Spell/Trap Card, or monster effect, is activated that includes an effect that Special Summons a monster (Quick Effect): You can detach 1 material from this card; negate the activation, and if you do, destroy that card, then you can make 1 other \"D/D\" monster you control and this card gain 1800 ATK until the end of this turn. If this card is sent from the field to the GY: You can add 1 \"Dark Contract\" card from your Deck to your hand.",
            "wordCount": 89
        },
        {
            "id": 74583607,
            "name": "D/D/D Flame King Genghis",
            "desc": "2 \"D/D\" monsters\nIf another \"D/D\" monster(s) is Special Summoned to your field, while you control this face-up card (except during the Damage Step): You can target 1 \"D/D\" monster in your Graveyard; Special Summon it. You can only use this effect of \"D/D/D Flame King Genghis\" once per turn. If this card is destroyed by battle, or if this card in its owner's possession is destroyed by an opponent's card effect: You can target 1 \"Dark Contract\" card in your Graveyard; add it to your hand.",
            "wordCount": 87
        },
        {
            "id": 59123937,
            "name": "D/D Vice Typhon",
            "desc": "When this card is Normal Summoned: You can Tribute 1 \"D/D\" monster; Special Summon 1 Level 7 \"D/D/D\" monster from your Deck. During your Main Phase, if this card is in the GY because it was sent there this turn: You can Fusion Summon 1 Level 8 or higher \"D/D/D\" Fusion Monster from your Extra Deck, by banishing Fusion Materials listed on it from your GY, including this card. You can only use each effect of \"D/D Vice Typhon\" once per turn.",
            "wordCount": 82
        },
        {
            "id": 16006416,
            "name": "D/D/D Flame High King Genghis",
            "desc": "1 Level 5 or higher \"D/D\" monster + 1 \"D/D\" monster\nIf another \"D/D\" monster(s) is Normal or Special Summoned to your field while you control this monster (except during the Damage Step): You can target 1 \"D/D\" monster in your GY; Special Summon it. You can only use this effect of \"D/D/D Flame High King Genghis\" once per turn. Once per your turn, when a Spell/Trap Card, or its effect, is activated (Quick Effect): You can negate the activation.",
            "wordCount": 80
        },
        {
            "id": 46796664,
            "name": "D/D Savant Copernicus",
            "desc": "[ Pendulum Effect ]\r\nYou cannot Pendulum Summon monsters, except \"D/D\" monsters. This effect cannot be negated. Once, while this card is in your Pendulum Zone, you can negate an activated Spell effect that would inflict damage to you, then destroy this card.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nIf this card is Normal or Special Summoned: You can send 1 \"D/D\" or \"Dark Contract\" card from your Deck to the GY, except \"D/D Savant Copernicus\". You can only use this effect of \"D/D Savant Copernicus\" once per turn.",
            "wordCount": 79
        },
        {
            "id": 39153655,
            "name": "D/D Cerberus",
            "desc": "[ Pendulum Effect ]\nOnce per turn: You can target 1 \"D/D\" monster you control; change its Level to 4, and if you do, it gains 400 ATK and DEF (even if this card leaves the field).\n----------------------------------------\n[ Monster Effect ]\nWhen this card is Pendulum Summoned from the hand, while you control a \"D/D\" monster other than \"D/D Cerberus\": You can target 1 Continuous Spell Card in your Graveyard; add it to your hand.",
            "wordCount": 76
        },
        {
            "id": 32349062,
            "name": "D/D Dog",
            "desc": "[ Pendulum Effect ]\r\nYou can target 1 Fusion, Synchro, or Xyz Monster your opponent controls; negate its effects until the end of this turn, then destroy this card. You can only use this effect of \"D/D Dog\" once per turn.\r\n----------------------------------------\r\n[ Monster Effect ]\r\nOnce per turn, if your opponent Special Summons a Fusion, Synchro, or Xyz Monster(s) (except during the Damage Step): You can target 1 of those monsters; this turn, that face-up monster cannot attack, also its effects are negated.",
            "wordCount": 75
        },
        {
            "id": 44852429,
            "name": "D/D/D Cursed King Siegfried",
            "desc": "1 Tuner + 1 or more non-Tuner \"D/D\" monsters\nDuring either player's turn: You can target 1 face-up Spell/Trap Card on the field; that target has its effects negated, until the next Standby Phase. You can only use this effect of \"D/D/D Cursed King Siegfried\" once per turn. If this card is destroyed by battle or card effect and sent to the Graveyard: Gain 1000 LP for each \"Dark Contract\" card you control.",
            "wordCount": 73
        },
        {
            "id": 72181263,
            "name": "D/D Orthros",
            "desc": "[ Pendulum Effect ]\nOnce per turn: You can target 1 Spell/Trap Card on the field and 1 other \"D/D\" or \"Dark Contract\" card you control; destroy them.\n----------------------------------------\n[ Monster Effect ]\nWhen you take battle or effect damage: You can Special Summon this card from your hand. If this card is Special Summoned to your field, you cannot Special Summon monsters for the rest of this turn, except Fiend-Type monsters.",
            "wordCount": 72
        },
        {
            "id": 73360025,
            "name": "Dark Contract with the Swamp King",
            "desc": "During your Main Phase: You can Fusion Summon 1 Fiend Fusion Monster from your Extra Deck, using monsters from your hand or field as material. You can only use this effect of \"Dark Contract with the Swamp King\" once per turn. If Summoning a \"D/D\" Fusion Monster this way, you can also banish monsters from your GY as material. Once per turn, during your Standby Phase: Take 1000 damage.",
            "wordCount": 69
        },
        {
            "id": 33907039,
            "name": "Piri Reis Map",
            "desc": "At the start of your Main Phase 1: Add 1 monster with 0 ATK from your Deck to your hand, but halve your LP. After adding it to your hand, until the end of the next turn after this card was activated, you cannot activate the added monster's effects, or the effects of cards with its name, until you Normal Summon that monster or a card with its name.",
            "wordCount": 69
        },
        {
            "id": 34267821,
            "name": "Artifact Lancea",
            "desc": "You can Set this card from your hand to your Spell & Trap Zone as a Spell. During your opponent's turn, if this Set card in the Spell & Trap Zone is destroyed and sent to your GY: Special Summon it. During your opponent's turn (Quick Effect): You can Tribute this card from your hand or face-up field; neither player can banish cards for the rest of this turn.",
            "wordCount": 69
        },
        {
            "id": 91781484,
            "name": "D/D/D Headhunt",
            "desc": "If you control a \"D/D/D\" monster: Target 1 face-up monster your opponent controls; take control of it until the End Phase of the next turn, but its effects are negated, it cannot declare an attack, also if it is a monster Special Summoned from the Extra Deck, it is also treated as a \"D/D/D\" monster. You can only activate 1 \"D/D/D Headhunt\" per turn.",
            "wordCount": 64
        },
        {
            "id": 33334269,
            "name": "D/D Ghost",
            "desc": "If this card is sent to the Graveyard: You can target 1 \"D/D\" monster or \"Dark Contract\" card in your Graveyard, except \"D/D Ghost\"; send 1 card from your Deck to the Graveyard with that name. If this card is banished: You can target 1 of your banished \"D/D\" monsters or \"Dark Contract\" cards, except \"D/D Ghost\"; return it to the Graveyard.",
            "wordCount": 62
        },
        {
            "id": 45206713,
            "name": "D/D Swirl Slime",
            "desc": "If this card is in your hand: You can Fusion Summon 1 \"D/D/D\" Fusion Monster from your Extra Deck, using monsters from your hand as Fusion Materials, including this card. You can banish this card from your GY; Special Summon 1 \"D/D\" monster from your hand. You can only use each effect of \"D/D Swirl Slime\" once per turn.",
            "wordCount": 59
        },
        {
            "id": 59438930,
            "name": "Ghost Ogre & Snow Rabbit",
            "desc": "When a monster on the field activates its effect, or when a Spell/Trap that is already face-up on the field activates its effect (Quick Effect): You can send this card from your hand or field to the GY; destroy that card on the field. You can only use this effect of \"Ghost Ogre & Snow Rabbit\" once per turn.",
            "wordCount": 59
        },
        {
            "id": 10045474,
            "name": "Infinite Impermanence",
            "desc": "Target 1 face-up monster your opponent controls; negate its effects (until the end of this turn), then, if this card was Set before activation and is on the field at resolution, for the rest of this turn all other Spell/Trap effects in this column are negated. If you control no cards, you can activate this card from your hand.",
            "wordCount": 59
        },
        {
            "id": 19580308,
            "name": "D/D Lamia",
            "desc": "If this card is in your hand or GY: You can send 1 \"D/D\" or \"Dark Contract\" card from your hand or face-up field to the GY, except \"D/D Lamia\"; Special Summon this card, but banish it when it leaves the field. You can only use this effect of \"D/D Lamia\" once per turn.",
            "wordCount": 54
        },
        {
            "id": 9030160,
            "name": "Dark Contract with the Eternal Darkness",
            "desc": "While you have 2 \"D/D\" cards in your Pendulum Zones, your opponent cannot target monsters on the field with Spell/Trap effects, Tribute them for a Tribute Summon, nor use them as Materials for a Fusion, Synchro, or Xyz Summon. Once per turn, during your Standby Phase: Take 1000 damage.",
            "wordCount": 49
        },
        {
            "id": 37209439,
            "name": "Dark Contract with Errors",
            "desc": "Once per turn, if you control a \"D/D\" monster: You can negate all Trap Card effects on the field (other than this card's) for the rest of this turn (even if this card leaves the field). Once per turn, during your Standby Phase: Take 1000 damage.",
            "wordCount": 46
        },
        {
            "id": 72291412,
            "name": "D/D Necro Slime",
            "desc": "If this card is in your GY: You can Fusion Summon 1 \"D/D/D\" Fusion Monster from your Extra Deck, by banishing Fusion Materials mentioned on it from your GY, including this card. You can only use this effect of \"D/D Necro Slime\" once per turn.",
            "wordCount": 45
        },
        {
            "id": 97268402,
            "name": "Effect Veiler",
            "desc": "During your opponent's Main Phase (Quick Effect): You can send this card from your hand to the GY, then target 1 Effect Monster your opponent controls; negate the effects of that face-up monster your opponent controls, until the end of this turn.",
            "wordCount": 42
        },
        {
            "id": 24224830,
            "name": "Called by the Grave",
            "desc": "Target 1 monster in your opponent's GY; banish it, and if you do, until the end of the next turn, its effects are negated, as well as the activated effects and effects on the field of monsters with the same original name.",
            "wordCount": 42
        },
        {
            "id": 46372010,
            "name": "Dark Contract with the Gate",
            "desc": "During your Main Phase: You can add 1 \"D/D\" monster from your Deck to your hand. You can only use this effect of \"Dark Contract with the Gate\" once per turn. Once per turn, during your Standby Phase: Take 1000 damage.",
            "wordCount": 41
        },
        {
            "id": 1475311,
            "name": "Allure of Darkness",
            "desc": "Draw 2 cards, then banish 1 DARK monster from your hand, or, if you do not have any in your hand, send your entire hand to the GY.",
            "wordCount": 28
        },
        {
            "id": 24508238,
            "name": "D.D. Crow",
            "desc": "(Quick Effect): You can discard this card to the GY, then target 1 card in your opponent's GY; banish that target.",
            "wordCount": 21
        },
        {
            "id": 2295440,
            "name": "One for One",
            "desc": "Send 1 monster from your hand to the GY; Special Summon 1 Level 1 monster from your hand or Deck.",
            "wordCount": 20
        },
        {
            "id": 82956492,
            "name": "D/D/D Oracle King d'Arc",
            "desc": "2 \"D/D\" monsters\nAny effect that would inflict damage to you makes you gain that much LP, instead.",
            "wordCount": 18
        },
        {
            "id": 43898403,
            "name": "Twin Twisters",
            "desc": "Discard 1 card, then target up to 2 Spells/Traps on the field; destroy them.",
            "wordCount": 14
        },
        {
            "id": 81439173,
            "name": "Foolish Burial",
            "desc": "Send 1 monster from your Deck to the GY.",
            "wordCount": 9
        },
        {
            "id": 18144506,
            "name": "Harpie's Feather Duster",
            "desc": "Destroy all Spells and Traps your opponent controls.",
            "wordCount": 8
        }
    ],
    "mct": {
        "mean": 72,
        "median": 72,
        "mode": 59
    }
};

// https://www.db.yugioh-card.com/yugiohdb/member_deck.action?ope=1&cgid=15e16e034ce4d4822074831588f10839&dno=12
const srData: TestingDeckData = {
    "decklist": {
        "monsters": [
            {
                "id": 52038441,
                "name": "Ghost Mourner & Moonlit Chill",
                "num": 1,
                "desc": "If your opponent Special Summons a monster(s) face-up (except during the Damage Step): You can discard this card, then target 1 of those face-up monsters; negate its effects until the end of this turn, also if that face-up monster leaves the field this turn, its controller takes damage equal to its original ATK. You can only use this effect of \"Ghost Mourner & Moonlit Chill\" once per turn."
            },
            {
                "id": 1980574,
                "name": "Hop Ear Squadron",
                "num": 1,
                "desc": "During your opponent's Main Phase (Quick Effect): You can target 1 face-up monster you control; Special Summon this card from your hand, and if you do, immediately after this effect resolves, Synchro Summon 1 Synchro Monster using only this card you control and that target. You can only use this effect of \"Hop Ear Squadron\" once per turn."
            },
            {
                "id": 67922702,
                "name": "Mecha Phantom Beast Tetherwolf",
                "num": 1,
                "desc": "If this card is Normal Summoned: Special Summon 1 \"Mecha Phantom Beast Token\" (Machine/WIND/Level 3/ATK 0/DEF 0). This card's Level is increased by the total Levels of all \"Mecha Phantom Beast Tokens\" you control. While you control a Token, this card cannot be destroyed by battle or card effects. Once per battle, during the Damage Step, when this card battles an opponent's monster (Quick Effect): You can Tribute 1 Token; this card gains 800 ATK, until the end of this turn."
            },
            {
                "id": 19636995,
                "name": "Red Hared Hasty Horse",
                "num": 1,
                "desc": "If there is a column with no cards, you can Special Summon this card (from your hand) in Attack Position to your zone in that column. You can only Special Summon \"Red Hared Hasty Horse\" once per turn this way. If another card is placed in this card's column: Destroy this card. Once per turn: You can halve this card's original ATK for the rest of this turn, and if you do, it can attack directly this turn."
            },
            {
                "id": 69550259,
                "name": "Speedroid Block-n-Roll",
                "num": 1,
                "desc": "If this card is sent to the GY as Synchro Material: You can Special Summon 1 \"Speedroid Token\" (Machine/WIND/ATK 0/DEF 0) with a Level equal to the original Level of the Synchro Monster that used this card as material. You can only use this effect of \"Speedroid Block-n-Roll\" once per turn."
            },
            {
                "id": 96945958,
                "name": "Speedroid CarTurbo",
                "num": 1,
                "desc": "If you control a WIND monster: You can Special Summon this card from your hand, also you cannot activate monster effects for the rest of this turn, except WIND monsters'. You can banish this card and 1 \"Speedroid\" monster from your GY; all WIND monsters you currently control gain 800 ATK until the end of this turn. You can only use each effect of \"Speedroid CarTurbo\" once per turn."
            },
            {
                "id": 59640711,
                "name": "Speedroid Den-Den Daiko Duke",
                "num": 2,
                "desc": "You can banish this card from your GY; Special Summon 1 \"Speedroid\" Tuner from your hand or GY, except \"Speedroid Den-Den Daiko Duke\". You can only use this effect of \"Speedroid Den-Den Daiko Duke\" once per turn."
            },
            {
                "id": 53054833,
                "name": "Speedroid Double Yoyo",
                "num": 2,
                "desc": "When this card is Normal Summoned: You can target 1 Level 3 or lower \"Speedroid\" monster in your GY; Special Summon it."
            },
            {
                "id": 70939418,
                "name": "Speedroid Gum Prize",
                "num": 1,
                "desc": "During the Battle Phase, if you take battle or effect damage: You can Special Summon this card from your hand. During either player's Battle Phase in which this card was Special Summoned by its effect, you can: Immediately after this effect resolves, Synchro Summon 1 Synchro Monster, using only WIND monsters you control, including this card. If this card is sent to the Graveyard as a Synchro Material: You can send the top card of your Deck to the Graveyard, and if the sent card was a \"Speedroid\" monster, the Synchro Monster that used this card as Synchro Material gains 1000 ATK."
            },
            {
                "id": 17328157,
                "name": "Speedroid Horse Stilts",
                "num": 2,
                "desc": "When this card is Normal Summoned: You can Special Summon 1 Level 4 or lower \"Speedroid\" monster from your hand. During your Main Phase, except the turn this card was sent to the GY: You can banish this card from your GY; send 1 WIND monster from your Deck to the GY. You can only use this effect of \"Speedroid Horse Stilts\" once per turn."
            },
            {
                "id": 62899696,
                "name": "Speedroid Maliciousmagnet",
                "num": 1,
                "desc": "Cannot be used as Synchro Material except for a Synchro Summon by its own effect. During your Main Phase, if this card is Normal or Special Summoned: You can target 1 face-up monster your opponent controls; immediately after this effect resolves, Synchro Summon 1 WIND Synchro Monster using only this card you control and that monster. You can only use this effect of \"Speedroid Maliciousmagnet\" once per turn."
            },
            {
                "id": 96708940,
                "name": "Speedroid Marble Machine",
                "num": 2,
                "desc": "[ Pendulum Effect ]\nOnce per turn, when your Defense Position monster is targeted for an attack: You can change it to face-up Attack Position, also it cannot be destroyed by battle this turn (even if this card leaves the field).\n----------------------------------------\n[ Monster Effect ]\nWhen this card is Normal Summoned: You can activate this effect; add 1 \"Speedroid\" monster from your Deck to your hand, also you cannot Special Summon monsters for the rest of this turn, except WIND monsters. You can only use this effect of \"Speedroid Marble Machine\" once per turn."
            },
            {
                "id": 89326990,
                "name": "Speedroid Ohajikid",
                "num": 1,
                "desc": "When this card is Normal Summoned: You can target 1 Tuner monster in either player's Graveyard; Special Summon it to your side of the field, and if you do, immediately after this effect resolves, Synchro Summon 1 WIND Synchro Monster, using that monster and this card only."
            },
            {
                "id": 26420373,
                "name": "Speedroid Passinglider",
                "num": 1,
                "desc": "[ Pendulum Effect ]\nOnce per turn: You can send 1 \"Speedroid\" Tuner from your hand or face-up from your field to the GY; increase or reduce (min. 1) this card's Pendulum Scale by the original Level of the sent monster until the end of this turn.\n----------------------------------------\n[ Monster Effect ]\nIf there are no monsters on the field, you can Special Summon this card (from your hand). You can only Special Summon \"Speedroid Passinglider\" once per turn this way. When this card is Tribute Summoned: You can target 1 Level 4 or lower \"Speedroid\" monster in your GY; Special Summon it. Your opponent's monsters cannot target \"Speedroid\" monsters for attacks, except this one."
            },
            {
                "id": 16725505,
                "name": "Speedroid Red-Eyed Dice",
                "num": 2,
                "desc": "When this card is Normal or Special Summoned: You can target 1 \"Speedroid\" monster you control, except \"Speedroid Red-Eyed Dice\", and declare a Level from 1 to 6; it becomes that Level until the end of this turn."
            },
            {
                "id": 8284390,
                "name": "Speedroid Rubberband Plane",
                "num": 1,
                "desc": "If a monster is Special Summoned to your field (except during the Damage Step): You can Special Summon this card from your hand, also you cannot Special Summon monsters for the rest of this turn, except WIND monsters. You can only use this effect of \"Speedroid Rubberband Plane\" once per turn. If this card is Normal or Special Summoned: You can target 1 face-up monster on the field; it loses 600 ATK until the end of this turn."
            },
            {
                "id": 53932291,
                "name": "Speedroid Taketomborg",
                "num": 2,
                "desc": "If you control a WIND monster, you can Special Summon this card (from your hand). You can Tribute this card; Special Summon 1 \"Speedroid\" Tuner from your Deck, also you cannot Special Summon monsters for the rest of this turn, except WIND monsters. You can only Special Summon \"Speedroid Taketomborg(s)\" once per turn."
            },
            {
                "id": 81275020,
                "name": "Speedroid Terrortop",
                "num": 1,
                "desc": "If you control no monsters, you can Special Summon this card (from your hand). When this card is Normal or Special Summoned: You can add 1 \"Speedroid\" monster from your Deck to your hand, except \"Speedroid Terrortop\". You can only use this effect of \"Speedroid Terrortop\" once per turn."
            },
            {
                "id": 86976918,
                "name": "Speedroid Ultra Hound",
                "num": 1,
                "desc": "When this card is Normal Summoned: You can send 1 \"Speedroid\" card from your Deck to the GY. During your Main Phase, except the turn this card was sent to the GY: You can banish this card from your GY, then target 1 \"Speedroid\" monster in your GY; shuffle it into the Deck, and if you do, Special Summon 1 \"Speedroid\" Synchro Monster from your Extra Deck with the same Level but a different name, but negate its effects. You can only use this effect of \"Speedroid Ultra Hound\" once per turn."
            },
            {
                "id": 86395581,
                "name": "Wynn the Wind Channeler",
                "num": 3,
                "desc": "(This card is always treated as a \"Charmer\" card.)\r\nYou can discard this card and 1 other WIND monster; add 1 WIND monster with 1500 or less DEF from your Deck to your hand, except \"Wynn the Wind Channeler\", also you cannot activate monster effects for the rest of this turn, except WIND monsters. When a WIND monster you control is destroyed by battle while this card is in your hand: You can Special Summon this card. You can only use each effect of \"Wynn the Wind Channeler\" once per turn."
            }
        ],
        "spells": [
            {
                "id": 15609017,
                "name": "Shock Surprise",
                "num": 2,
                "desc": "Banish up to 2 \"Speedroid\" monsters from your Graveyard, then target that many cards on the field; destroy them."
            },
            {
                "id": 88204302,
                "name": "Speed Recovery",
                "num": 3,
                "desc": "Target 1 \"Speedroid\" monster in your GY; Special Summon it. During your Main Phase, except the turn this card was sent to the GY: You can banish this card from your GY, then target 1 \"Speedroid\" monster in your GY; add it to your hand."
            },
            {
                "id": 36730805,
                "name": "Speedlift",
                "num": 1,
                "desc": "If you control exactly 1 Tuner and no other monsters: Special Summon 1 Level 4 or lower \"Speedroid\" monster from your Deck. Neither player can activate cards or effects when that monster is Special Summoned."
            },
            {
                "id": 12148078,
                "name": "Speedroid Wheel",
                "num": 2,
                "desc": "Discard 1 card; roll a six-sided die, then Special Summon, from your hand and/or Deck, 1 or 2 \"Speedroid\" monsters whose total Levels equal the result, but negate their effects. If you do not Special Summon, you lose LP equal to the result x 500. You can only activate 1 \"Speedroid Wheel\" per turn."
            }
        ],
        "traps": [
            {
                "id": 88482761,
                "name": "Dice Roll Battle",
                "num": 1,
                "desc": "When an opponent's monster declares an attack: Target 1 \"Speedroid\" monster in your Graveyard; banish both it and 1 \"Speedroid\" Tuner monster in your hand, and if you do, Special Summon from your Extra Deck, 1 Synchro Monster whose Level equals the total original Levels of those 2 monsters. During your opponent's Battle Step: You can banish this card from your Graveyard, then target 1 face-up Attack Position Synchro Monster on each side of the field; make that face-up Attack Position monster your opponent controls attack that monster you control, and perform damage calculation."
            },
            {
                "id": 85704698,
                "name": "Re-dyce-cle",
                "num": 1,
                "desc": "Target 1 \"Speedroid\" Tuner monster in your Graveyard; Special Summon it, but its effects are negated, also roll a six-sided die, and its Level becomes the result until the end of this turn. You can banish this card from your Graveyard; immediately after this effect resolves, Synchro Summon 1 WIND Synchro Monster, using monsters you control including a \"Speedroid\" Tuner monster."
            },
            {
                "id": 58543073,
                "name": "Speedroid Dupligate",
                "num": 2,
                "desc": "Banish 1 WIND monster from your GY, then target 1 card your opponent controls; return it to the hand. During your Main Phase, if this card is in your GY: You can target 1 Level 2 or higher \"Speedroid\" monster you control; reduce its Level by 1, and if you do, Special Summon this card as a Normal Monster (Machine/Tuner/WIND/Level 1/ATK 0/DEF 0). (This card is NOT treated as a Trap.) You can only use this effect of \"Speedroid Dupligate\" once per Duel."
            }
        ],
        "extras": [
            {
                "id": 90036274,
                "name": "Clear Wing Fast Dragon",
                "num": 1,
                "desc": "[ Pendulum Effect ]\nYou can send 1 face-up \"Speedroid\" Tuner and 1 face-up non-Tuner monster you control to the GY, whose total Levels equal 7; Special Summon this card from your Pendulum Zone. You can only use this effect of \"Clear Wing Fast Dragon\" once per turn.\n----------------------------------------\n[ Monster Effect ]\n1 Tuner + 1+ non-Tuner WIND monsters\n(Quick Effect): You can target 1 face-up monster your opponent controls that was Special Summoned from the Extra Deck; until the end of this turn, change its ATK to 0, also negate that face-up monster's effects. You can only use this effect of \"Clear Wing Fast Dragon\" once per turn. If this card in the Monster Zone is destroyed by battle or card effect: You can place this card in your Pendulum Zone."
            },
            {
                "id": 82044279,
                "name": "Clear Wing Synchro Dragon",
                "num": 1,
                "desc": "1 Tuner + 1+ non-Tuner monsters\nOnce per turn, when another Level 5 or higher monster activates its effect on the field (Quick Effect): You can negate the activation, and if you do, destroy it. Once per turn, when a monster effect is activated that targets 1 Level 5 or higher monster on the field (and no other cards) (Quick Effect): You can negate the activation, and if you do, destroy it. If this card's effect destroys a monster, this card gains ATK equal to the destroyed monster's original ATK until the end of this turn."
            },
            {
                "id": 59765225,
                "name": "Crystal Clear Wing Synchro Dragon",
                "num": 1,
                "desc": "1 Tuner Synchro Monster + 1 non-Tuner \"Clear Wing\" monster\r\nOnce per turn, when your opponent activates a monster effect (except during the Damage Step) (Quick Effect): You can activate this effect; until the end of this turn, this face-up card is unaffected by the activated effects of your opponent's monsters, also this card gains ATK equal to that opponent's monster's original ATK. Once per turn, when a Spell/Trap Card or effect is activated (Quick Effect): You can negate the activation, and if you do, destroy that card. If this Synchro Summoned card you control is sent to your GY by an opponent's card: You can add 1 WIND monster from your Deck to your hand."
            },
            {
                "id": 50954680,
                "name": "Crystal Wing Synchro Dragon",
                "num": 1,
                "desc": "1 Tuner + 1+ non-Tuner Synchro Monsters\nOnce per turn, when another monster's effect is activated (Quick Effect): You can negate the activation, and if you do, destroy that monster, and if you do that, this card gains ATK equal to the destroyed monster's original ATK until the end of this turn. If this card battles an opponent's Level 5 or higher monster, during damage calculation: This card gains ATK equal to the current ATK of the opponent's monster it is battling during that damage calculation only."
            },
            {
                "id": 42110604,
                "name": "Hi-Speedroid Chanbara",
                "num": 1,
                "desc": "1 Tuner + 1+ non-Tuner monsters\nThis card can make a second attack during each Battle Phase. At the start of the Damage Step, if this card battles: It gains 200 ATK. If this card is sent to the GY: You can target 1 of your banished \"Speedroid\" cards; add it to your hand. You can only Special Summon \"Hi-Speedroid Chanbara(s)\" once per turn."
            },
            {
                "id": 86154370,
                "name": "Hi-Speedroid Clear Wing Rider",
                "num": 1,
                "desc": "1 WIND Tuner + 1 non-Tuner WIND Synchro Monster\r\nOnce per turn, during your Main Phase: You can roll a six-sided die and shuffle WIND monsters from your GY into your Deck, up to the result, then, you can destroy cards your opponent controls up to the number shuffled, and if you do, this card gains 500 ATK for each card destroyed by this effect, until the end of this turn. During your opponent's Main Phase (Quick Effect): You can Tribute this Synchro Summoned card; Special Summon up to 2 Level 7 WIND Synchro Monsters with different names from each other from your Extra Deck."
            },
            {
                "id": 23361526,
                "name": "Hi-Speedroid Cork Shooter",
                "num": 1,
                "desc": "1 Tuner + 1+ non-Tuner monsters\r\nIf this card is Synchro Summoned: You can activate 1 of these effects;\r\n● Add 1 \"Speedroid\" Spell/Trap from your Deck to your hand.\r\n● If all materials that were used for the Synchro Summon of this card were \"Speedroid\" monsters, and are all in your GY, Special Summon all of them.\r\nYou cannot Special Summon monsters the turn you activate this effect, except WIND monsters. You can only use this effect of \"Hi-Speedroid Cork Shooter\" once per turn."
            },
            {
                "id": 21516908,
                "name": "Hi-Speedroid Hagoita",
                "num": 1,
                "desc": "1 Tuner + 1 or more non-Tuner monsters\nDuring either player's turn: You can Tribute this card; increase the Levels of all monsters currently on the field by 1, until the end of this turn. If this card is in your Graveyard and you control a \"Speedroid\" Tuner monster: You can Special Summon this card, also you cannot Special Summon monsters for the rest of this turn, except WIND monsters. You can only use this effect of \"Hi-Speedroid Hagoita\" once per turn."
            },
            {
                "id": 97007933,
                "name": "Hi-Speedroid Kendama",
                "num": 1,
                "desc": "1 Tuner + 1 or more non-Tuner monsters\nIf this card attacks a Defense Position monster, inflict piercing battle damage to your opponent. You can only use each of the following effects of \"Hi-Speedroid Kendama\" once per turn.\n●You can banish 1 Machine-Type monster from your Graveyard; inflict 500 damage to your opponent.\n●If this card is in your Graveyard and you control no cards: You can Special Summon this card. You cannot Normal Summon/Set the turn you activate this effect."
            },
            {
                "id": 86943389,
                "name": "Hi-Speedroid Puzzle",
                "num": 1,
                "desc": "1 Tuner + 1 or more non-Tuner monsters\nAt the start of the Damage Step, if this card battles a Special Summoned monster: You can make this card's ATK become double its current ATK until the end of the Damage Step. Once per turn, during the End Phase, if this card is in the Graveyard because this Synchro Summoned card was sent there from the field this turn: You can target 1 \"Speedroid\" monster in your Graveyard, except \"Hi-Speedroid Puzzle\"; add it to your hand."
            },
            {
                "id": 64880894,
                "name": "Stardust Charge Warrior",
                "num": 1,
                "desc": "1 Tuner + 1+ non-Tuner monsters\nWhen this card is Synchro Summoned: You can draw 1 card. You can only use this effect of \"Stardust Charge Warrior\" once per turn. This card can attack all Special Summoned monsters your opponent controls, once each."
            },
            {
                "id": 44508094,
                "name": "Stardust Dragon",
                "num": 1,
                "desc": "1 Tuner + 1+ non-Tuner monsters\nWhen a card or effect is activated that would destroy a card(s) on the field (Quick Effect): You can Tribute this card; negate the activation, and if you do, destroy it. During the End Phase, if this effect was activated this turn (and was not negated): You can Special Summon this card from your GY."
            }
        ],
        "sides": []
    },
    "wordCounts": [
        {
            "id": 90036274,
            "name": "Clear Wing Fast Dragon",
            "desc": "[ Pendulum Effect ]\nYou can send 1 face-up \"Speedroid\" Tuner and 1 face-up non-Tuner monster you control to the GY, whose total Levels equal 7; Special Summon this card from your Pendulum Zone. You can only use this effect of \"Clear Wing Fast Dragon\" once per turn.\n----------------------------------------\n[ Monster Effect ]\n1 Tuner + 1+ non-Tuner WIND monsters\n(Quick Effect): You can target 1 face-up monster your opponent controls that was Special Summoned from the Extra Deck; until the end of this turn, change its ATK to 0, also negate that face-up monster's effects. You can only use this effect of \"Clear Wing Fast Dragon\" once per turn. If this card in the Monster Zone is destroyed by battle or card effect: You can place this card in your Pendulum Zone.",
            "wordCount": 133
        },
        {
            "id": 59765225,
            "name": "Crystal Clear Wing Synchro Dragon",
            "desc": "1 Tuner Synchro Monster + 1 non-Tuner \"Clear Wing\" monster\r\nOnce per turn, when your opponent activates a monster effect (except during the Damage Step) (Quick Effect): You can activate this effect; until the end of this turn, this face-up card is unaffected by the activated effects of your opponent's monsters, also this card gains ATK equal to that opponent's monster's original ATK. Once per turn, when a Spell/Trap Card or effect is activated (Quick Effect): You can negate the activation, and if you do, destroy that card. If this Synchro Summoned card you control is sent to your GY by an opponent's card: You can add 1 WIND monster from your Deck to your hand.",
            "wordCount": 116
        },
        {
            "id": 26420373,
            "name": "Speedroid Passinglider",
            "desc": "[ Pendulum Effect ]\nOnce per turn: You can send 1 \"Speedroid\" Tuner from your hand or face-up from your field to the GY; increase or reduce (min. 1) this card's Pendulum Scale by the original Level of the sent monster until the end of this turn.\n----------------------------------------\n[ Monster Effect ]\nIf there are no monsters on the field, you can Special Summon this card (from your hand). You can only Special Summon \"Speedroid Passinglider\" once per turn this way. When this card is Tribute Summoned: You can target 1 Level 4 or lower \"Speedroid\" monster in your GY; Special Summon it. Your opponent's monsters cannot target \"Speedroid\" monsters for attacks, except this one.",
            "wordCount": 115
        },
        {
            "id": 86154370,
            "name": "Hi-Speedroid Clear Wing Rider",
            "desc": "1 WIND Tuner + 1 non-Tuner WIND Synchro Monster\r\nOnce per turn, during your Main Phase: You can roll a six-sided die and shuffle WIND monsters from your GY into your Deck, up to the result, then, you can destroy cards your opponent controls up to the number shuffled, and if you do, this card gains 500 ATK for each card destroyed by this effect, until the end of this turn. During your opponent's Main Phase (Quick Effect): You can Tribute this Synchro Summoned card; Special Summon up to 2 Level 7 WIND Synchro Monsters with different names from each other from your Extra Deck.",
            "wordCount": 105
        },
        {
            "id": 70939418,
            "name": "Speedroid Gum Prize",
            "desc": "During the Battle Phase, if you take battle or effect damage: You can Special Summon this card from your hand. During either player's Battle Phase in which this card was Special Summoned by its effect, you can: Immediately after this effect resolves, Synchro Summon 1 Synchro Monster, using only WIND monsters you control, including this card. If this card is sent to the Graveyard as a Synchro Material: You can send the top card of your Deck to the Graveyard, and if the sent card was a \"Speedroid\" monster, the Synchro Monster that used this card as Synchro Material gains 1000 ATK.",
            "wordCount": 102
        },
        {
            "id": 82044279,
            "name": "Clear Wing Synchro Dragon",
            "desc": "1 Tuner + 1+ non-Tuner monsters\nOnce per turn, when another Level 5 or higher monster activates its effect on the field (Quick Effect): You can negate the activation, and if you do, destroy it. Once per turn, when a monster effect is activated that targets 1 Level 5 or higher monster on the field (and no other cards) (Quick Effect): You can negate the activation, and if you do, destroy it. If this card's effect destroys a monster, this card gains ATK equal to the destroyed monster's original ATK until the end of this turn.",
            "wordCount": 96
        },
        {
            "id": 96708940,
            "name": "Speedroid Marble Machine",
            "desc": "[ Pendulum Effect ]\nOnce per turn, when your Defense Position monster is targeted for an attack: You can change it to face-up Attack Position, also it cannot be destroyed by battle this turn (even if this card leaves the field).\n----------------------------------------\n[ Monster Effect ]\nWhen this card is Normal Summoned: You can activate this effect; add 1 \"Speedroid\" monster from your Deck to your hand, also you cannot Special Summon monsters for the rest of this turn, except WIND monsters. You can only use this effect of \"Speedroid Marble Machine\" once per turn.",
            "wordCount": 95
        },
        {
            "id": 88482761,
            "name": "Dice Roll Battle",
            "desc": "When an opponent's monster declares an attack: Target 1 \"Speedroid\" monster in your Graveyard; banish both it and 1 \"Speedroid\" Tuner monster in your hand, and if you do, Special Summon from your Extra Deck, 1 Synchro Monster whose Level equals the total original Levels of those 2 monsters. During your opponent's Battle Step: You can banish this card from your Graveyard, then target 1 face-up Attack Position Synchro Monster on each side of the field; make that face-up Attack Position monster your opponent controls attack that monster you control, and perform damage calculation.",
            "wordCount": 94
        },
        {
            "id": 86976918,
            "name": "Speedroid Ultra Hound",
            "desc": "When this card is Normal Summoned: You can send 1 \"Speedroid\" card from your Deck to the GY. During your Main Phase, except the turn this card was sent to the GY: You can banish this card from your GY, then target 1 \"Speedroid\" monster in your GY; shuffle it into the Deck, and if you do, Special Summon 1 \"Speedroid\" Synchro Monster from your Extra Deck with the same Level but a different name, but negate its effects. You can only use this effect of \"Speedroid Ultra Hound\" once per turn.",
            "wordCount": 92
        },
        {
            "id": 86395581,
            "name": "Wynn the Wind Channeler",
            "desc": "(This card is always treated as a \"Charmer\" card.)\r\nYou can discard this card and 1 other WIND monster; add 1 WIND monster with 1500 or less DEF from your Deck to your hand, except \"Wynn the Wind Channeler\", also you cannot activate monster effects for the rest of this turn, except WIND monsters. When a WIND monster you control is destroyed by battle while this card is in your hand: You can Special Summon this card. You can only use each effect of \"Wynn the Wind Channeler\" once per turn.",
            "wordCount": 91
        },
        {
            "id": 50954680,
            "name": "Crystal Wing Synchro Dragon",
            "desc": "1 Tuner + 1+ non-Tuner Synchro Monsters\nOnce per turn, when another monster's effect is activated (Quick Effect): You can negate the activation, and if you do, destroy that monster, and if you do that, this card gains ATK equal to the destroyed monster's original ATK until the end of this turn. If this card battles an opponent's Level 5 or higher monster, during damage calculation: This card gains ATK equal to the current ATK of the opponent's monster it is battling during that damage calculation only.",
            "wordCount": 87
        },
        {
            "id": 23361526,
            "name": "Hi-Speedroid Cork Shooter",
            "desc": "1 Tuner + 1+ non-Tuner monsters\r\nIf this card is Synchro Summoned: You can activate 1 of these effects;\r\n● Add 1 \"Speedroid\" Spell/Trap from your Deck to your hand.\r\n● If all materials that were used for the Synchro Summon of this card were \"Speedroid\" monsters, and are all in your GY, Special Summon all of them.\r\nYou cannot Special Summon monsters the turn you activate this effect, except WIND monsters. You can only use this effect of \"Hi-Speedroid Cork Shooter\" once per turn.",
            "wordCount": 85
        },
        {
            "id": 86943389,
            "name": "Hi-Speedroid Puzzle",
            "desc": "1 Tuner + 1 or more non-Tuner monsters\nAt the start of the Damage Step, if this card battles a Special Summoned monster: You can make this card's ATK become double its current ATK until the end of the Damage Step. Once per turn, during the End Phase, if this card is in the Graveyard because this Synchro Summoned card was sent there from the field this turn: You can target 1 \"Speedroid\" monster in your Graveyard, except \"Hi-Speedroid Puzzle\"; add it to your hand.",
            "wordCount": 85
        },
        {
            "id": 58543073,
            "name": "Speedroid Dupligate",
            "desc": "Banish 1 WIND monster from your GY, then target 1 card your opponent controls; return it to the hand. During your Main Phase, if this card is in your GY: You can target 1 Level 2 or higher \"Speedroid\" monster you control; reduce its Level by 1, and if you do, Special Summon this card as a Normal Monster (Machine/Tuner/WIND/Level 1/ATK 0/DEF 0). (This card is NOT treated as a Trap.) You can only use this effect of \"Speedroid Dupligate\" once per Duel.",
            "wordCount": 83
        },
        {
            "id": 21516908,
            "name": "Hi-Speedroid Hagoita",
            "desc": "1 Tuner + 1 or more non-Tuner monsters\nDuring either player's turn: You can Tribute this card; increase the Levels of all monsters currently on the field by 1, until the end of this turn. If this card is in your Graveyard and you control a \"Speedroid\" Tuner monster: You can Special Summon this card, also you cannot Special Summon monsters for the rest of this turn, except WIND monsters. You can only use this effect of \"Hi-Speedroid Hagoita\" once per turn.",
            "wordCount": 82
        },
        {
            "id": 67922702,
            "name": "Mecha Phantom Beast Tetherwolf",
            "desc": "If this card is Normal Summoned: Special Summon 1 \"Mecha Phantom Beast Token\" (Machine/WIND/Level 3/ATK 0/DEF 0). This card's Level is increased by the total Levels of all \"Mecha Phantom Beast Tokens\" you control. While you control a Token, this card cannot be destroyed by battle or card effects. Once per battle, during the Damage Step, when this card battles an opponent's monster (Quick Effect): You can Tribute 1 Token; this card gains 800 ATK, until the end of this turn.",
            "wordCount": 81
        },
        {
            "id": 97007933,
            "name": "Hi-Speedroid Kendama",
            "desc": "1 Tuner + 1 or more non-Tuner monsters\nIf this card attacks a Defense Position monster, inflict piercing battle damage to your opponent. You can only use each of the following effects of \"Hi-Speedroid Kendama\" once per turn.\n●You can banish 1 Machine-Type monster from your Graveyard; inflict 500 damage to your opponent.\n●If this card is in your Graveyard and you control no cards: You can Special Summon this card. You cannot Normal Summon/Set the turn you activate this effect.",
            "wordCount": 81
        },
        {
            "id": 19636995,
            "name": "Red Hared Hasty Horse",
            "desc": "If there is a column with no cards, you can Special Summon this card (from your hand) in Attack Position to your zone in that column. You can only Special Summon \"Red Hared Hasty Horse\" once per turn this way. If another card is placed in this card's column: Destroy this card. Once per turn: You can halve this card's original ATK for the rest of this turn, and if you do, it can attack directly this turn.",
            "wordCount": 78
        },
        {
            "id": 8284390,
            "name": "Speedroid Rubberband Plane",
            "desc": "If a monster is Special Summoned to your field (except during the Damage Step): You can Special Summon this card from your hand, also you cannot Special Summon monsters for the rest of this turn, except WIND monsters. You can only use this effect of \"Speedroid Rubberband Plane\" once per turn. If this card is Normal or Special Summoned: You can target 1 face-up monster on the field; it loses 600 ATK until the end of this turn.",
            "wordCount": 78
        },
        {
            "id": 96945958,
            "name": "Speedroid CarTurbo",
            "desc": "If you control a WIND monster: You can Special Summon this card from your hand, also you cannot activate monster effects for the rest of this turn, except WIND monsters'. You can banish this card and 1 \"Speedroid\" monster from your GY; all WIND monsters you currently control gain 800 ATK until the end of this turn. You can only use each effect of \"Speedroid CarTurbo\" once per turn.",
            "wordCount": 69
        },
        {
            "id": 52038441,
            "name": "Ghost Mourner & Moonlit Chill",
            "desc": "If your opponent Special Summons a monster(s) face-up (except during the Damage Step): You can discard this card, then target 1 of those face-up monsters; negate its effects until the end of this turn, also if that face-up monster leaves the field this turn, its controller takes damage equal to its original ATK. You can only use this effect of \"Ghost Mourner & Moonlit Chill\" once per turn.",
            "wordCount": 68
        },
        {
            "id": 62899696,
            "name": "Speedroid Maliciousmagnet",
            "desc": "Cannot be used as Synchro Material except for a Synchro Summon by its own effect. During your Main Phase, if this card is Normal or Special Summoned: You can target 1 face-up monster your opponent controls; immediately after this effect resolves, Synchro Summon 1 WIND Synchro Monster using only this card you control and that monster. You can only use this effect of \"Speedroid Maliciousmagnet\" once per turn.",
            "wordCount": 68
        },
        {
            "id": 17328157,
            "name": "Speedroid Horse Stilts",
            "desc": "When this card is Normal Summoned: You can Special Summon 1 Level 4 or lower \"Speedroid\" monster from your hand. During your Main Phase, except the turn this card was sent to the GY: You can banish this card from your GY; send 1 WIND monster from your Deck to the GY. You can only use this effect of \"Speedroid Horse Stilts\" once per turn.",
            "wordCount": 65
        },
        {
            "id": 42110604,
            "name": "Hi-Speedroid Chanbara",
            "desc": "1 Tuner + 1+ non-Tuner monsters\nThis card can make a second attack during each Battle Phase. At the start of the Damage Step, if this card battles: It gains 200 ATK. If this card is sent to the GY: You can target 1 of your banished \"Speedroid\" cards; add it to your hand. You can only Special Summon \"Hi-Speedroid Chanbara(s)\" once per turn.",
            "wordCount": 64
        },
        {
            "id": 85704698,
            "name": "Re-dyce-cle",
            "desc": "Target 1 \"Speedroid\" Tuner monster in your Graveyard; Special Summon it, but its effects are negated, also roll a six-sided die, and its Level becomes the result until the end of this turn. You can banish this card from your Graveyard; immediately after this effect resolves, Synchro Summon 1 WIND Synchro Monster, using monsters you control including a \"Speedroid\" Tuner monster.",
            "wordCount": 61
        },
        {
            "id": 44508094,
            "name": "Stardust Dragon",
            "desc": "1 Tuner + 1+ non-Tuner monsters\nWhen a card or effect is activated that would destroy a card(s) on the field (Quick Effect): You can Tribute this card; negate the activation, and if you do, destroy it. During the End Phase, if this effect was activated this turn (and was not negated): You can Special Summon this card from your GY.",
            "wordCount": 61
        },
        {
            "id": 1980574,
            "name": "Hop Ear Squadron",
            "desc": "During your opponent's Main Phase (Quick Effect): You can target 1 face-up monster you control; Special Summon this card from your hand, and if you do, immediately after this effect resolves, Synchro Summon 1 Synchro Monster using only this card you control and that target. You can only use this effect of \"Hop Ear Squadron\" once per turn.",
            "wordCount": 58
        },
        {
            "id": 12148078,
            "name": "Speedroid Wheel",
            "desc": "Discard 1 card; roll a six-sided die, then Special Summon, from your hand and/or Deck, 1 or 2 \"Speedroid\" monsters whose total Levels equal the result, but negate their effects. If you do not Special Summon, you lose LP equal to the result x 500. You can only activate 1 \"Speedroid Wheel\" per turn.",
            "wordCount": 54
        },
        {
            "id": 53932291,
            "name": "Speedroid Taketomborg",
            "desc": "If you control a WIND monster, you can Special Summon this card (from your hand). You can Tribute this card; Special Summon 1 \"Speedroid\" Tuner from your Deck, also you cannot Special Summon monsters for the rest of this turn, except WIND monsters. You can only Special Summon \"Speedroid Taketomborg(s)\" once per turn.",
            "wordCount": 53
        },
        {
            "id": 69550259,
            "name": "Speedroid Block-n-Roll",
            "desc": "If this card is sent to the GY as Synchro Material: You can Special Summon 1 \"Speedroid Token\" (Machine/WIND/ATK 0/DEF 0) with a Level equal to the original Level of the Synchro Monster that used this card as material. You can only use this effect of \"Speedroid Block-n-Roll\" once per turn.",
            "wordCount": 51
        },
        {
            "id": 81275020,
            "name": "Speedroid Terrortop",
            "desc": "If you control no monsters, you can Special Summon this card (from your hand). When this card is Normal or Special Summoned: You can add 1 \"Speedroid\" monster from your Deck to your hand, except \"Speedroid Terrortop\". You can only use this effect of \"Speedroid Terrortop\" once per turn.",
            "wordCount": 49
        },
        {
            "id": 89326990,
            "name": "Speedroid Ohajikid",
            "desc": "When this card is Normal Summoned: You can target 1 Tuner monster in either player's Graveyard; Special Summon it to your side of the field, and if you do, immediately after this effect resolves, Synchro Summon 1 WIND Synchro Monster, using that monster and this card only.",
            "wordCount": 47
        },
        {
            "id": 88204302,
            "name": "Speed Recovery",
            "desc": "Target 1 \"Speedroid\" monster in your GY; Special Summon it. During your Main Phase, except the turn this card was sent to the GY: You can banish this card from your GY, then target 1 \"Speedroid\" monster in your GY; add it to your hand.",
            "wordCount": 45
        },
        {
            "id": 64880894,
            "name": "Stardust Charge Warrior",
            "desc": "1 Tuner + 1+ non-Tuner monsters\nWhen this card is Synchro Summoned: You can draw 1 card. You can only use this effect of \"Stardust Charge Warrior\" once per turn. This card can attack all Special Summoned monsters your opponent controls, once each.",
            "wordCount": 43
        },
        {
            "id": 16725505,
            "name": "Speedroid Red-Eyed Dice",
            "desc": "When this card is Normal or Special Summoned: You can target 1 \"Speedroid\" monster you control, except \"Speedroid Red-Eyed Dice\", and declare a Level from 1 to 6; it becomes that Level until the end of this turn.",
            "wordCount": 38
        },
        {
            "id": 59640711,
            "name": "Speedroid Den-Den Daiko Duke",
            "desc": "You can banish this card from your GY; Special Summon 1 \"Speedroid\" Tuner from your hand or GY, except \"Speedroid Den-Den Daiko Duke\". You can only use this effect of \"Speedroid Den-Den Daiko Duke\" once per turn.",
            "wordCount": 37
        },
        {
            "id": 36730805,
            "name": "Speedlift",
            "desc": "If you control exactly 1 Tuner and no other monsters: Special Summon 1 Level 4 or lower \"Speedroid\" monster from your Deck. Neither player can activate cards or effects when that monster is Special Summoned.",
            "wordCount": 35
        },
        {
            "id": 53054833,
            "name": "Speedroid Double Yoyo",
            "desc": "When this card is Normal Summoned: You can target 1 Level 3 or lower \"Speedroid\" monster in your GY; Special Summon it.",
            "wordCount": 22
        },
        {
            "id": 15609017,
            "name": "Shock Surprise",
            "desc": "Banish up to 2 \"Speedroid\" monsters from your Graveyard, then target that many cards on the field; destroy them.",
            "wordCount": 19
        }
    ],
    "mct": {
        "mean": 71,
        "median": 69,
        "mode": 61
    }
};

// https://www.db.yugioh-card.com/yugiohdb/member_deck.action?ope=1&cgid=15e16e034ce4d4822074831588f10839&dno=5
const pkfireData: TestingDeckData = {
    "decklist": {
        "monsters": [
            {
                "id": 73304257,
                "name": "Alpha, the Master of Beasts",
                "num": 1,
                "desc": "Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) while the total ATK of all monsters your opponent controls is more than that of all monsters you control. You can target any number of Beast, Beast-Warrior, and/or Winged Beast monsters you control; return them to the hand, then, return face-up monsters your opponent controls to the hand, equal to the number of cards you returned to the hand, also for the rest of this turn, \"Alpha, the Master of Beasts\" you control cannot attack directly. You can only use this effect of \"Alpha, the Master of Beasts\" once per turn."
            },
            {
                "id": 28985331,
                "name": "Armageddon Knight",
                "num": 1,
                "desc": "When this card is Summoned: You can send 1 DARK monster from your Deck to the GY."
            },
            {
                "id": 54582424,
                "name": "Blue Mountain Butterspy",
                "num": 1,
                "desc": "Cannot be Normal Summoned/Set. Must first be Special Summoned by its own effect. When you Normal Summon a Warrior monster: You can Special Summon this card from your hand. Cannot be used as Synchro Material.\r\n\r\n* The above text is unofficial and describes the card's functionality in the OCG."
            },
            {
                "id": 57143342,
                "name": "Cir, Malebranche of the Burning Abyss",
                "num": 1,
                "desc": "If you control a monster that is not a \"Burning Abyss\" monster, destroy this card. You can only use 1 of these effects of \"Cir, Malebranche of the Burning Abyss\" per turn, and only once that turn.\n●If you control no Spell/Trap Cards: You can Special Summon this card from your hand.\n●If this card is sent to the Graveyard: You can target 1 \"Burning Abyss\" monster in your Graveyard, except \"Cir, Malebranche of the Burning Abyss\"; Special Summon it."
            },
            {
                "id": 43694650,
                "name": "Danger!? Jackalope?",
                "num": 1,
                "desc": "You can reveal this card in your hand; your opponent randomly chooses 1 card from your entire hand, then you discard the chosen card. Then, if the discarded card was not \"Danger!? Jackalope?\", Special Summon 1 \"Danger!? Jackalope?\" from your hand, and if you do, draw 1 card. If this card is discarded: You can Special Summon 1 \"Danger!\" monster from your Deck in Defense Position, except \"Danger!? Jackalope?\". You can only use this effect of \"Danger!? Jackalope?\" once per turn."
            },
            {
                "id": 36553319,
                "name": "Farfa, Malebranche of the Burning Abyss",
                "num": 1,
                "desc": "If you control a monster that is not a \"Burning Abyss\" monster, destroy this card. You can only use 1 of these effects of \"Farfa, Malebranche of the Burning Abyss\" per turn, and only once that turn.\r\n● If you control no Spells/Traps: You can Special Summon this card from your hand.\r\n● If this card is sent to the GY: You can target 1 monster on the field; banish it until the End Phase."
            },
            {
                "id": 20758643,
                "name": "Graff, Malebranche of the Burning Abyss",
                "num": 1,
                "desc": "If you control a monster that is not a \"Burning Abyss\" monster, destroy this card. You can only use 1 of these effects of \"Graff, Malebranche of the Burning Abyss\" per turn, and only once that turn.\n●If you control no Spell/Trap Cards: You can Special Summon this card from your hand.\n●If this card is sent to the Graveyard: You can Special Summon 1 \"Burning Abyss\" monster from your Deck, except \"Graff, Malebranche of the Burning Abyss\"."
            },
            {
                "id": 56410040,
                "name": "Junk Forward",
                "num": 1,
                "desc": "If you control no monsters, you can Special Summon this card (from your hand)."
            },
            {
                "id": 19353570,
                "name": "Kagemucha Knight",
                "num": 1,
                "desc": "When you Normal Summon a Level 3 monster: You can Special Summon this card from your hand. Cannot be used as Synchro Material."
            },
            {
                "id": 62957424,
                "name": "Libic, Malebranche of the Burning Abyss",
                "num": 1,
                "desc": "If you control a monster that is not a \"Burning Abyss\" monster, destroy this card. You can only use 1 of these effects of \"Libic, Malebranche of the Burning Abyss\" per turn, and only once that turn.\n●If you control no Spell/Trap Cards: You can Special Summon this card from your hand.\n●If this card is sent to the Graveyard: You can Special Summon 1 Level 3 DARK Fiend-Type monster from your hand, but its effects are negated."
            },
            {
                "id": 90432163,
                "name": "The Phantom Knights of Ancient Cloak",
                "num": 2,
                "desc": "If this card is in Attack Position: You can target 1 DARK monster on the field; change this card to Defense Position, and if you do, that monster gains 800 ATK/DEF until the end of your opponent's turn. You can banish this card from your GY; add 1 \"The Phantom Knights\" card from your Deck to your hand, except \"The Phantom Knights of Ancient Cloak\". You can only use each effect of \"The Phantom Knights of Ancient Cloak\" once per turn."
            },
            {
                "id": 63821877,
                "name": "The Phantom Knights of Ragged Gloves",
                "num": 2,
                "desc": "A DARK Xyz Monster that was Summoned using this card on the field as material gains this effect.\r\n● If it is Xyz Summoned: It gains 1000 ATK.\r\nYou can banish this card from your GY; send 1 \"Phantom Knights\" card from your Deck to the GY. You can only use each effect of \"The Phantom Knights of Ragged Gloves\" once per turn."
            },
            {
                "id": 36426778,
                "name": "The Phantom Knights of Silent Boots",
                "num": 2,
                "desc": "If you control a \"The Phantom Knights\" monster, you can Special Summon this card (from your hand). You can only Special Summon \"The Phantom Knights of Silent Boots\" once per turn this way. You can banish this card from your GY; add 1 \"Phantom Knights\" Spell/Trap from your Deck to your hand. You can only use this effect of \"The Phantom Knights of Silent Boots\" once per turn."
            },
            {
                "id": 88544390,
                "name": "The Phantom Knights of Stained Greaves",
                "num": 2,
                "desc": "If a \"The Phantom Knights\" monster(s) is Special Summoned to your field (except during the Damage Step): You can Special Summon this card from your hand, then you can increase its Level by 1. You can banish this card from your GY; Special Summon 1 \"The Phantom Knights\" monster from your hand, except \"The Phantom Knights of Stained Greaves\", then you can increase its Level by 1. You can only use each effect of \"The Phantom Knights of Stained Greaves\" once per turn."
            },
            {
                "id": 25538345,
                "name": "The Phantom Knights of Torn Scales",
                "num": 3,
                "desc": "You can discard 1 card; send 1 \"Phantom Knights\" card from your Deck to the GY, except \"The Phantom Knights of Torn Scales\". If another \"Phantom Knights\" card in your GY is banished, while this card is in your GY: You can Special Summon this card, but banish it when it leaves the field. You can only use each effect of \"The Phantom Knights of Torn Scales\" once per turn."
            },
            {
                "id": 10802915,
                "name": "Tour Guide From the Underworld",
                "num": 2,
                "desc": "When this card is Normal Summoned: You can Special Summon 1 Level 3 Fiend monster from your hand or Deck, but negate its effects, also it cannot be used as Synchro Material."
            }
        ],
        "spells": [
            {
                "id": 674561,
                "name": "Dark Eruption",
                "num": 1,
                "desc": "Target 1 DARK monster with 1500 or less ATK in your GY; add that target to your hand."
            },
            {
                "id": 53129443,
                "name": "Dark Hole",
                "num": 1,
                "desc": "Destroy all monsters on the field."
            },
            {
                "id": 81439173,
                "name": "Foolish Burial",
                "num": 1,
                "desc": "Send 1 monster from your Deck to the GY."
            },
            {
                "id": 83764718,
                "name": "Monster Reborn",
                "num": 1,
                "desc": "Target 1 monster in either GY; Special Summon it."
            },
            {
                "id": 88504133,
                "name": "Phantom Knights' Rank-Up-Magic Force",
                "num": 1,
                "desc": "During the Main Phase: Banish 1 or more DARK monsters from your GY, then target 1 DARK Xyz Monster you control; Special Summon from your Extra Deck, 1 \"The Phantom Knights\", \"Raidraptor\", or \"Xyz Dragon\" Xyz Monster, whose Rank equals that of the targeted monster you control + the number of monsters banished, by using it as material, also for the rest of this turn after this card resolves, you cannot Special Summon monsters from the Extra Deck, except Xyz Monsters. (This is treated as an Xyz Summon. Transfer its materials to the Summoned monster.) You can only activate 1 \"Phantom Knights' Rank-Up-Magic Force\" per turn."
            },
            {
                "id": 32807846,
                "name": "Reinforcement of the Army",
                "num": 1,
                "desc": "Add 1 Level 4 or lower Warrior monster from your Deck to your hand."
            },
            {
                "id": 3298689,
                "name": "The Phantom Knights' Rank-Up-Magic Launch",
                "num": 1,
                "desc": "During the Main Phase: Target 1 DARK Xyz Monster you control with no material; Special Summon from your Extra Deck, 1 DARK Xyz Monster that is 1 Rank higher than that monster you control, by using it as the Xyz Material, and if you do, attach this card to it as additional material. (This is treated as an Xyz Summon. Transfer its materials to the Summoned monster.) During your Main Phase: You can banish this card from your GY, then target 1 DARK Xyz Monster you control; attach 1 \"The Phantom Knights\" monster from your hand to that monster as material."
            },
            {
                "id": 43898403,
                "name": "Twin Twisters",
                "num": 1,
                "desc": "Discard 1 card, then target up to 2 Spells/Traps on the field; destroy them."
            }
        ],
        "traps": [
            {
                "id": 74003290,
                "name": "Lost Wind",
                "num": 1,
                "desc": "Target 1 face-up Special Summoned monster on the field; negate its effects, also its original ATK is halved. If a monster is Special Summoned from your opponent's Extra Deck, while this card is in your GY (except during the Damage Step): You can Set this card, but banish it when it leaves the field."
            },
            {
                "id": 25542642,
                "name": "Phantom Knights' Fog Blade",
                "num": 3,
                "desc": "Activate this card by targeting 1 Effect Monster on the field; negate that face-up monster's effects, that face-up monster cannot attack, also monsters cannot target that face-up monster for attacks. When it leaves the field, destroy this card. You can banish this card from your GY, then target 1 \"The Phantom Knights\" monster in your GY; Special Summon it, but banish it when it leaves the field. You can only use this effect of \"Phantom Knights' Fog Blade\" once per turn."
            },
            {
                "id": 61936647,
                "name": "Phantom Knights' Sword",
                "num": 1,
                "desc": "Activate this card by targeting 1 face-up monster on the field; it gains 800 ATK, also if that target would be destroyed by battle or card effect, you can destroy this card instead. When it leaves the field, destroy this card. You can banish this card from your GY, then target 1 \"The Phantom Knights\" monster in your GY; Special Summon it, but banish it when it leaves the field. You can only use this effect of \"Phantom Knights' Sword\" once per turn."
            },
            {
                "id": 98431356,
                "name": "Phantom Knights' Wing",
                "num": 1,
                "desc": "Target 1 face-up monster on the field; it gains 500 ATK, also the first time that target would be destroyed by battle or card effect this turn, it is not destroyed. You can banish this card from your GY, then target 1 \"The Phantom Knights\" monster in your GY; Special Summon it, but banish it when it leaves the field. You can only use this effect of \"Phantom Knights' Wing\" once per turn."
            },
            {
                "id": 9336190,
                "name": "The Phantom Knights of Mist Claws",
                "num": 1,
                "desc": "Target 1 of your banished \"The Phantom Knights\" monsters; add it to your hand. When an opponent's monster declares a direct attack while this card is in your GY: You can target 1 Level 4 or lower \"The Phantom Knights\" monster in your GY; Special Summon that monster, and if you do, Special Summon this card as a Normal Monster with the same original Level as that monster (Warrior/DARK/ATK 0/DEF 0). (This card is NOT treated as a Trap.) If Summoned this way, banish this card when it leaves the field."
            },
            {
                "id": 98827725,
                "name": "The Phantom Knights of Shade Brigandine",
                "num": 1,
                "desc": "Special Summon this card in Defense Position as a Normal Monster (Warrior/DARK/Level 4/ATK 0/DEF 300). (This card is NOT treated as a Trap.) If you have no Traps in your GY, you can activate this card the turn it was Set. You can only activate 1 \"The Phantom Knights of Shade Brigandine\" per turn."
            },
            {
                "id": 62645025,
                "name": "The Phantom Knights of Wrong Magnetring",
                "num": 1,
                "desc": "When an opponent's monster declares an attack: Negate that attack, then Special Summon this card in Attack Position as an Effect Monster (Warrior/DARK/Level 2/ATK 0/DEF 0) with the following effect. (This card is NOT treated as a Trap.)\n●(Quick Effect): You can send this card and 1 face-up card you control to the GY (either a \"The Phantom Knights\" monster or a \"Phantom Knights\" Continuous Spell/Trap); draw 2 cards."
            }
        ],
        "extras": [
            {
                "id": 64276752,
                "name": "Arc Rebellion Xyz Dragon",
                "num": 1,
                "desc": "3 Level 5 monsters\r\nThis Xyz Summoned card cannot be destroyed by card effects. You can detach 1 material from this card; this card gains ATK equal to the total original ATK of all other monsters on the field, then, if this card has a DARK Xyz Monster as material, negate the effects of all other face-up monsters on the field. After this effect resolves, you cannot declare attacks with other monsters for the rest of this turn. You can only use this effect of \"Arc Rebellion Xyz Dragon\" once per turn."
            },
            {
                "id": 58699500,
                "name": "Cherubini, Ebon Angel of the Burning Abyss",
                "num": 1,
                "desc": "2 Level 3 monsters\nMonsters this card points to cannot be destroyed by card effects. If this card would be destroyed by battle or an opponent's card effect, you can send 1 other card you control to the GY instead. You can send 1 Level 3 monster from your Deck to the GY, then target 1 \"Burning Abyss\" monster on the field; it gains ATK/DEF equal to the ATK/DEF of the monster sent to the GY, until the end of this turn. You can only use this effect of \"Cherubini, Ebon Angel of the Burning Abyss\" once per turn."
            },
            {
                "id": 83531441,
                "name": "Dante, Traveler of the Burning Abyss",
                "num": 1,
                "desc": "2 Level 3 monsters\nOnce per turn: You can detach 1 material from this card and choose a number from 1 to 3, then send that many cards from the top of your Deck to the GY; until the end of this turn, this card gains 500 ATK for each card sent to the GY this way. If this card attacks, it is changed to Defense Position at the end of the Battle Phase. If this card is sent to the GY: You can target 1 \"Burning Abyss\" card in your GY, except this card; add it to your hand."
            },
            {
                "id": 16195942,
                "name": "Dark Rebellion Xyz Dragon",
                "num": 1,
                "desc": "2 Level 4 monsters\nYou can detach 2 materials from this card, then target 1 face-up monster your opponent controls; its ATK becomes half its current ATK, and if it does, this card gains that lost ATK."
            },
            {
                "id": 1621413,
                "name": "Dark Requiem Xyz Dragon",
                "num": 1,
                "desc": "3 Level 5 monsters\nIf this card has \"Dark Rebellion Xyz Dragon\" as material, it gains these effects.\n●Once per turn: You can detach 1 material from this card, then target 1 face-up monster your opponent controls; change its ATK to 0, and if you do, this card gains ATK equal to that monster's original ATK.\n●When your opponent activates a monster effect (Quick Effect): You can detach 1 material from this card; negate the activation, and if you do, destroy that card, then you can Special Summon 1 Xyz Monster from your GY."
            },
            {
                "id": 359563,
                "name": "Evilswarm Nightmare",
                "num": 1,
                "desc": "2 Level 4 DARK monsters\nWhen your opponent Special Summons a monster(s) (except during the Damage Step): You can detach 1 material from this card; change that Special Summoned monster(s) to face-down Defense Position."
            },
            {
                "id": 65884091,
                "name": "Evilswarm Thanatos",
                "num": 1,
                "desc": "2 Level 4 DARK monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card; this face-up card is unaffected by other monster effects this turn."
            },
            {
                "id": 95992081,
                "name": "Leviair the Sea Dragon",
                "num": 1,
                "desc": "2 Level 3 monsters\nOnce per turn: You can detach 1 material from this card, then target 1 banished Level 4 or lower monster; Special Summon that target to your field."
            },
            {
                "id": 63504681,
                "name": "Number 86: Heroic Champion - Rhongomyniad",
                "num": 1,
                "desc": "2 or more (max. 5) Level 4 Warrior monsters\r\nOnce per turn, during your opponent's End Phase: Detach 1 material from this card. This card gains effects based on the number of materials attached to it.\r\n● 1+: Cannot be destroyed by battle.\r\n● 2+: Gains 1500 ATK/DEF.\r\n● 3+: Unaffected by other cards' effects.\r\n● 4+: Your opponent cannot Normal or Special Summon monsters.\r\n● 5+: Once per turn: You can destroy all cards your opponent controls.\r\n\r\n* The above text is unofficial and describes the card's functionality in the OCG."
            },
            {
                "id": 28781003,
                "name": "Raider's Knight",
                "num": 1,
                "desc": "2 Level 4 DARK monsters\r\n(This card is always treated as a \"The Phantom Knights\" and \"Raidraptor\" card.)\r\nYou can detach 1 material from this card; Special Summon from your Extra Deck, 1 \"The Phantom Knights\", \"Raidraptor\", or \"Xyz Dragon\" Xyz Monster that is 1 Rank higher or lower than this card, by using this face-up card you control as material, but destroy it during your opponent's next End Phase. (This is treated as an Xyz Summon. Transfer its materials to the Summoned monster.) You can only use this effect of \"Raider's Knight\" once per turn."
            },
            {
                "id": 62709239,
                "name": "The Phantom Knights of Break Sword",
                "num": 2,
                "desc": "2 Level 3 monsters\nOnce per turn: You can detach 1 material from this card, then target 1 card you control and 1 card your opponent controls; destroy them. If this Xyz Summoned card is destroyed: You can target 2 \"The Phantom Knights\" monsters with the same Level in your GY; Special Summon them and increase their Levels by 1, also you cannot Special Summon monsters for the rest of this turn, except DARK monsters."
            },
            {
                "id": 26692769,
                "name": "The Phantom Knights of Rusty Bardiche",
                "num": 1,
                "desc": "2+ DARK monsters\nDuring your Main Phase: You can send 1 \"The Phantom Knights\" monster from your Deck to the GY, then Set 1 \"Phantom Knights\" Spell/Trap directly from your Deck to your Spell & Trap Zone. If a DARK Xyz Monster(s) is Special Summoned to a zone(s) this card points to, while this monster is on the field (except during the Damage Step): You can target 1 card on the field; destroy it. You can only use each effect of \"The Phantom Knights of Rusty Bardiche\" once per turn. Cannot be used as Link Material."
            },
            {
                "id": 55285840,
                "name": "Time Thief Redoer",
                "num": 1,
                "desc": "2 Level 4 monsters\nOnce per turn, during the Standby Phase: You can attach the top card of your opponent's Deck to this card as material. (Quick Effect): You can detach up to 3 different types of materials from this card, then apply the following effect(s) depending on what was detached.\n●Monster: Banish this card until the End Phase.\n●Spell: Draw 1 card.\n●Trap: Place 1 face-up card your opponent controls on the top of the Deck.\nYou can only use this effect of \"Time Thief Redoer\" once per turn."
            },
            {
                "id": 90664857,
                "name": "Virtual World Shell - Jaja",
                "num": 1,
                "desc": "2+ Level 3 monsters\r\nOnce per turn: You can detach 1 material from this card, then target 1 face-up monster you control; it cannot be destroyed by battle until the end of your opponent's turn. Once per turn, after damage calculation, if this card battled an opponent's monster, while you have 2 or more monsters in your GY with the same original Type and Attribute as each other: You can banish that opponent's monster."
            }
        ],
        "sides": [
            {
                "id": 46772449,
                "name": "Evilswarm Exciton Knight",
                "num": 1,
                "desc": "2 Level 4 monsters\nOnce per chain, during your Main Phase or your opponent's Battle Phase, if your opponent has more total cards in their hand and field than you do (Quick Effect): You can detach 1 material from this card; destroy all other cards on the field, also your opponent takes no further damage this turn."
            },
            {
                "id": 2857636,
                "name": "Knightmare Phoenix",
                "num": 1,
                "desc": "2 monsters with different names\nIf this card is Link Summoned: You can discard 1 card, then target 1 Spell/Trap your opponent controls; destroy it, then, if this card was co-linked when this effect was activated, you can draw 1 card. You can only use this effect of \"Knightmare Phoenix\" once per turn. Co-linked monsters you control cannot be destroyed by battle."
            },
            {
                "id": 12219047,
                "name": "The Phantom Knights of Cursed Javelin",
                "num": 1,
                "desc": "2 Level 2 monsters\nYou can detach 1 material from this card, then target 1 face-up monster your opponent controls; until the end of this turn, change its ATK to 0, also negate its effects. This is a Quick Effect if this card has a \"The Phantom Knights\" card as material. You can only use this effect of \"The Phantom Knights of Cursed Javelin\" once per turn."
            }
        ]
    },
    "wordCounts": [
        {
            "id": 88504133,
            "name": "Phantom Knights' Rank-Up-Magic Force",
            "desc": "During the Main Phase: Banish 1 or more DARK monsters from your GY, then target 1 DARK Xyz Monster you control; Special Summon from your Extra Deck, 1 \"The Phantom Knights\", \"Raidraptor\", or \"Xyz Dragon\" Xyz Monster, whose Rank equals that of the targeted monster you control + the number of monsters banished, by using it as material, also for the rest of this turn after this card resolves, you cannot Special Summon monsters from the Extra Deck, except Xyz Monsters. (This is treated as an Xyz Summon. Transfer its materials to the Summoned monster.) You can only activate 1 \"Phantom Knights' Rank-Up-Magic Force\" per turn.",
            "wordCount": 106
        },
        {
            "id": 73304257,
            "name": "Alpha, the Master of Beasts",
            "desc": "Cannot be Normal Summoned/Set. Must first be Special Summoned (from your hand) while the total ATK of all monsters your opponent controls is more than that of all monsters you control. You can target any number of Beast, Beast-Warrior, and/or Winged Beast monsters you control; return them to the hand, then, return face-up monsters your opponent controls to the hand, equal to the number of cards you returned to the hand, also for the rest of this turn, \"Alpha, the Master of Beasts\" you control cannot attack directly. You can only use this effect of \"Alpha, the Master of Beasts\" once per turn.",
            "wordCount": 103
        },
        {
            "id": 3298689,
            "name": "The Phantom Knights' Rank-Up-Magic Launch",
            "desc": "During the Main Phase: Target 1 DARK Xyz Monster you control with no material; Special Summon from your Extra Deck, 1 DARK Xyz Monster that is 1 Rank higher than that monster you control, by using it as the Xyz Material, and if you do, attach this card to it as additional material. (This is treated as an Xyz Summon. Transfer its materials to the Summoned monster.) During your Main Phase: You can banish this card from your GY, then target 1 DARK Xyz Monster you control; attach 1 \"The Phantom Knights\" monster from your hand to that monster as material.",
            "wordCount": 101
        },
        {
            "id": 83531441,
            "name": "Dante, Traveler of the Burning Abyss",
            "desc": "2 Level 3 monsters\nOnce per turn: You can detach 1 material from this card and choose a number from 1 to 3, then send that many cards from the top of your Deck to the GY; until the end of this turn, this card gains 500 ATK for each card sent to the GY this way. If this card attacks, it is changed to Defense Position at the end of the Battle Phase. If this card is sent to the GY: You can target 1 \"Burning Abyss\" card in your GY, except this card; add it to your hand.",
            "wordCount": 100
        },
        {
            "id": 58699500,
            "name": "Cherubini, Ebon Angel of the Burning Abyss",
            "desc": "2 Level 3 monsters\nMonsters this card points to cannot be destroyed by card effects. If this card would be destroyed by battle or an opponent's card effect, you can send 1 other card you control to the GY instead. You can send 1 Level 3 monster from your Deck to the GY, then target 1 \"Burning Abyss\" monster on the field; it gains ATK/DEF equal to the ATK/DEF of the monster sent to the GY, until the end of this turn. You can only use this effect of \"Cherubini, Ebon Angel of the Burning Abyss\" once per turn.",
            "wordCount": 99
        },
        {
            "id": 28781003,
            "name": "Raider's Knight",
            "desc": "2 Level 4 DARK monsters\r\n(This card is always treated as a \"The Phantom Knights\" and \"Raidraptor\" card.)\r\nYou can detach 1 material from this card; Special Summon from your Extra Deck, 1 \"The Phantom Knights\", \"Raidraptor\", or \"Xyz Dragon\" Xyz Monster that is 1 Rank higher or lower than this card, by using this face-up card you control as material, but destroy it during your opponent's next End Phase. (This is treated as an Xyz Summon. Transfer its materials to the Summoned monster.) You can only use this effect of \"Raider's Knight\" once per turn.",
            "wordCount": 96
        },
        {
            "id": 26692769,
            "name": "The Phantom Knights of Rusty Bardiche",
            "desc": "2+ DARK monsters\nDuring your Main Phase: You can send 1 \"The Phantom Knights\" monster from your Deck to the GY, then Set 1 \"Phantom Knights\" Spell/Trap directly from your Deck to your Spell & Trap Zone. If a DARK Xyz Monster(s) is Special Summoned to a zone(s) this card points to, while this monster is on the field (except during the Damage Step): You can target 1 card on the field; destroy it. You can only use each effect of \"The Phantom Knights of Rusty Bardiche\" once per turn. Cannot be used as Link Material.",
            "wordCount": 96
        },
        {
            "id": 1621413,
            "name": "Dark Requiem Xyz Dragon",
            "desc": "3 Level 5 monsters\nIf this card has \"Dark Rebellion Xyz Dragon\" as material, it gains these effects.\n●Once per turn: You can detach 1 material from this card, then target 1 face-up monster your opponent controls; change its ATK to 0, and if you do, this card gains ATK equal to that monster's original ATK.\n●When your opponent activates a monster effect (Quick Effect): You can detach 1 material from this card; negate the activation, and if you do, destroy that card, then you can Special Summon 1 Xyz Monster from your GY.",
            "wordCount": 94
        },
        {
            "id": 64276752,
            "name": "Arc Rebellion Xyz Dragon",
            "desc": "3 Level 5 monsters\r\nThis Xyz Summoned card cannot be destroyed by card effects. You can detach 1 material from this card; this card gains ATK equal to the total original ATK of all other monsters on the field, then, if this card has a DARK Xyz Monster as material, negate the effects of all other face-up monsters on the field. After this effect resolves, you cannot declare attacks with other monsters for the rest of this turn. You can only use this effect of \"Arc Rebellion Xyz Dragon\" once per turn.",
            "wordCount": 92
        },
        {
            "id": 63504681,
            "name": "Number 86: Heroic Champion - Rhongomyniad",
            "desc": "2 or more (max. 5) Level 4 Warrior monsters\r\nOnce per turn, during your opponent's End Phase: Detach 1 material from this card. This card gains effects based on the number of materials attached to it.\r\n● 1+: Cannot be destroyed by battle.\r\n● 2+: Gains 1500 ATK/DEF.\r\n● 3+: Unaffected by other cards' effects.\r\n● 4+: Your opponent cannot Normal or Special Summon monsters.\r\n● 5+: Once per turn: You can destroy all cards your opponent controls.\r\n\r\n* The above text is unofficial and describes the card's functionality in the OCG.",
            "wordCount": 92
        },
        {
            "id": 9336190,
            "name": "The Phantom Knights of Mist Claws",
            "desc": "Target 1 of your banished \"The Phantom Knights\" monsters; add it to your hand. When an opponent's monster declares a direct attack while this card is in your GY: You can target 1 Level 4 or lower \"The Phantom Knights\" monster in your GY; Special Summon that monster, and if you do, Special Summon this card as a Normal Monster with the same original Level as that monster (Warrior/DARK/ATK 0/DEF 0). (This card is NOT treated as a Trap.) If Summoned this way, banish this card when it leaves the field.",
            "wordCount": 91
        },
        {
            "id": 55285840,
            "name": "Time Thief Redoer",
            "desc": "2 Level 4 monsters\nOnce per turn, during the Standby Phase: You can attach the top card of your opponent's Deck to this card as material. (Quick Effect): You can detach up to 3 different types of materials from this card, then apply the following effect(s) depending on what was detached.\n●Monster: Banish this card until the End Phase.\n●Spell: Draw 1 card.\n●Trap: Place 1 face-up card your opponent controls on the top of the Deck.\nYou can only use this effect of \"Time Thief Redoer\" once per turn.",
            "wordCount": 90
        },
        {
            "id": 88544390,
            "name": "The Phantom Knights of Stained Greaves",
            "desc": "If a \"The Phantom Knights\" monster(s) is Special Summoned to your field (except during the Damage Step): You can Special Summon this card from your hand, then you can increase its Level by 1. You can banish this card from your GY; Special Summon 1 \"The Phantom Knights\" monster from your hand, except \"The Phantom Knights of Stained Greaves\", then you can increase its Level by 1. You can only use each effect of \"The Phantom Knights of Stained Greaves\" once per turn.",
            "wordCount": 83
        },
        {
            "id": 61936647,
            "name": "Phantom Knights' Sword",
            "desc": "Activate this card by targeting 1 face-up monster on the field; it gains 800 ATK, also if that target would be destroyed by battle or card effect, you can destroy this card instead. When it leaves the field, destroy this card. You can banish this card from your GY, then target 1 \"The Phantom Knights\" monster in your GY; Special Summon it, but banish it when it leaves the field. You can only use this effect of \"Phantom Knights' Sword\" once per turn.",
            "wordCount": 83
        },
        {
            "id": 43694650,
            "name": "Danger!? Jackalope?",
            "desc": "You can reveal this card in your hand; your opponent randomly chooses 1 card from your entire hand, then you discard the chosen card. Then, if the discarded card was not \"Danger!? Jackalope?\", Special Summon 1 \"Danger!? Jackalope?\" from your hand, and if you do, draw 1 card. If this card is discarded: You can Special Summon 1 \"Danger!\" monster from your Deck in Defense Position, except \"Danger!? Jackalope?\". You can only use this effect of \"Danger!? Jackalope?\" once per turn.",
            "wordCount": 81
        },
        {
            "id": 90432163,
            "name": "The Phantom Knights of Ancient Cloak",
            "desc": "If this card is in Attack Position: You can target 1 DARK monster on the field; change this card to Defense Position, and if you do, that monster gains 800 ATK/DEF until the end of your opponent's turn. You can banish this card from your GY; add 1 \"The Phantom Knights\" card from your Deck to your hand, except \"The Phantom Knights of Ancient Cloak\". You can only use each effect of \"The Phantom Knights of Ancient Cloak\" once per turn.",
            "wordCount": 81
        },
        {
            "id": 25542642,
            "name": "Phantom Knights' Fog Blade",
            "desc": "Activate this card by targeting 1 Effect Monster on the field; negate that face-up monster's effects, that face-up monster cannot attack, also monsters cannot target that face-up monster for attacks. When it leaves the field, destroy this card. You can banish this card from your GY, then target 1 \"The Phantom Knights\" monster in your GY; Special Summon it, but banish it when it leaves the field. You can only use this effect of \"Phantom Knights' Fog Blade\" once per turn.",
            "wordCount": 81
        },
        {
            "id": 57143342,
            "name": "Cir, Malebranche of the Burning Abyss",
            "desc": "If you control a monster that is not a \"Burning Abyss\" monster, destroy this card. You can only use 1 of these effects of \"Cir, Malebranche of the Burning Abyss\" per turn, and only once that turn.\n●If you control no Spell/Trap Cards: You can Special Summon this card from your hand.\n●If this card is sent to the Graveyard: You can target 1 \"Burning Abyss\" monster in your Graveyard, except \"Cir, Malebranche of the Burning Abyss\"; Special Summon it.",
            "wordCount": 80
        },
        {
            "id": 20758643,
            "name": "Graff, Malebranche of the Burning Abyss",
            "desc": "If you control a monster that is not a \"Burning Abyss\" monster, destroy this card. You can only use 1 of these effects of \"Graff, Malebranche of the Burning Abyss\" per turn, and only once that turn.\n●If you control no Spell/Trap Cards: You can Special Summon this card from your hand.\n●If this card is sent to the Graveyard: You can Special Summon 1 \"Burning Abyss\" monster from your Deck, except \"Graff, Malebranche of the Burning Abyss\".",
            "wordCount": 78
        },
        {
            "id": 62957424,
            "name": "Libic, Malebranche of the Burning Abyss",
            "desc": "If you control a monster that is not a \"Burning Abyss\" monster, destroy this card. You can only use 1 of these effects of \"Libic, Malebranche of the Burning Abyss\" per turn, and only once that turn.\n●If you control no Spell/Trap Cards: You can Special Summon this card from your hand.\n●If this card is sent to the Graveyard: You can Special Summon 1 Level 3 DARK Fiend-Type monster from your hand, but its effects are negated.",
            "wordCount": 78
        },
        {
            "id": 36553319,
            "name": "Farfa, Malebranche of the Burning Abyss",
            "desc": "If you control a monster that is not a \"Burning Abyss\" monster, destroy this card. You can only use 1 of these effects of \"Farfa, Malebranche of the Burning Abyss\" per turn, and only once that turn.\r\n● If you control no Spells/Traps: You can Special Summon this card from your hand.\r\n● If this card is sent to the GY: You can target 1 monster on the field; banish it until the End Phase.",
            "wordCount": 75
        },
        {
            "id": 62709239,
            "name": "The Phantom Knights of Break Sword",
            "desc": "2 Level 3 monsters\nOnce per turn: You can detach 1 material from this card, then target 1 card you control and 1 card your opponent controls; destroy them. If this Xyz Summoned card is destroyed: You can target 2 \"The Phantom Knights\" monsters with the same Level in your GY; Special Summon them and increase their Levels by 1, also you cannot Special Summon monsters for the rest of this turn, except DARK monsters.",
            "wordCount": 75
        },
        {
            "id": 90664857,
            "name": "Virtual World Shell - Jaja",
            "desc": "2+ Level 3 monsters\r\nOnce per turn: You can detach 1 material from this card, then target 1 face-up monster you control; it cannot be destroyed by battle until the end of your opponent's turn. Once per turn, after damage calculation, if this card battled an opponent's monster, while you have 2 or more monsters in your GY with the same original Type and Attribute as each other: You can banish that opponent's monster.",
            "wordCount": 74
        },
        {
            "id": 98431356,
            "name": "Phantom Knights' Wing",
            "desc": "Target 1 face-up monster on the field; it gains 500 ATK, also the first time that target would be destroyed by battle or card effect this turn, it is not destroyed. You can banish this card from your GY, then target 1 \"The Phantom Knights\" monster in your GY; Special Summon it, but banish it when it leaves the field. You can only use this effect of \"Phantom Knights' Wing\" once per turn.",
            "wordCount": 73
        },
        {
            "id": 25538345,
            "name": "The Phantom Knights of Torn Scales",
            "desc": "You can discard 1 card; send 1 \"Phantom Knights\" card from your Deck to the GY, except \"The Phantom Knights of Torn Scales\". If another \"Phantom Knights\" card in your GY is banished, while this card is in your GY: You can Special Summon this card, but banish it when it leaves the field. You can only use each effect of \"The Phantom Knights of Torn Scales\" once per turn.",
            "wordCount": 70
        },
        {
            "id": 62645025,
            "name": "The Phantom Knights of Wrong Magnetring",
            "desc": "When an opponent's monster declares an attack: Negate that attack, then Special Summon this card in Attack Position as an Effect Monster (Warrior/DARK/Level 2/ATK 0/DEF 0) with the following effect. (This card is NOT treated as a Trap.)\n●(Quick Effect): You can send this card and 1 face-up card you control to the GY (either a \"The Phantom Knights\" monster or a \"Phantom Knights\" Continuous Spell/Trap); draw 2 cards.",
            "wordCount": 69
        },
        {
            "id": 36426778,
            "name": "The Phantom Knights of Silent Boots",
            "desc": "If you control a \"The Phantom Knights\" monster, you can Special Summon this card (from your hand). You can only Special Summon \"The Phantom Knights of Silent Boots\" once per turn this way. You can banish this card from your GY; add 1 \"Phantom Knights\" Spell/Trap from your Deck to your hand. You can only use this effect of \"The Phantom Knights of Silent Boots\" once per turn.",
            "wordCount": 68
        },
        {
            "id": 12219047,
            "name": "The Phantom Knights of Cursed Javelin",
            "desc": "2 Level 2 monsters\nYou can detach 1 material from this card, then target 1 face-up monster your opponent controls; until the end of this turn, change its ATK to 0, also negate its effects. This is a Quick Effect if this card has a \"The Phantom Knights\" card as material. You can only use this effect of \"The Phantom Knights of Cursed Javelin\" once per turn.",
            "wordCount": 67
        },
        {
            "id": 63821877,
            "name": "The Phantom Knights of Ragged Gloves",
            "desc": "A DARK Xyz Monster that was Summoned using this card on the field as material gains this effect.\r\n● If it is Xyz Summoned: It gains 1000 ATK.\r\nYou can banish this card from your GY; send 1 \"Phantom Knights\" card from your Deck to the GY. You can only use each effect of \"The Phantom Knights of Ragged Gloves\" once per turn.",
            "wordCount": 63
        },
        {
            "id": 2857636,
            "name": "Knightmare Phoenix",
            "desc": "2 monsters with different names\nIf this card is Link Summoned: You can discard 1 card, then target 1 Spell/Trap your opponent controls; destroy it, then, if this card was co-linked when this effect was activated, you can draw 1 card. You can only use this effect of \"Knightmare Phoenix\" once per turn. Co-linked monsters you control cannot be destroyed by battle.",
            "wordCount": 62
        },
        {
            "id": 46772449,
            "name": "Evilswarm Exciton Knight",
            "desc": "2 Level 4 monsters\nOnce per chain, during your Main Phase or your opponent's Battle Phase, if your opponent has more total cards in their hand and field than you do (Quick Effect): You can detach 1 material from this card; destroy all other cards on the field, also your opponent takes no further damage this turn.",
            "wordCount": 57
        },
        {
            "id": 74003290,
            "name": "Lost Wind",
            "desc": "Target 1 face-up Special Summoned monster on the field; negate its effects, also its original ATK is halved. If a monster is Special Summoned from your opponent's Extra Deck, while this card is in your GY (except during the Damage Step): You can Set this card, but banish it when it leaves the field.",
            "wordCount": 54
        },
        {
            "id": 98827725,
            "name": "The Phantom Knights of Shade Brigandine",
            "desc": "Special Summon this card in Defense Position as a Normal Monster (Warrior/DARK/Level 4/ATK 0/DEF 300). (This card is NOT treated as a Trap.) If you have no Traps in your GY, you can activate this card the turn it was Set. You can only activate 1 \"The Phantom Knights of Shade Brigandine\" per turn.",
            "wordCount": 54
        },
        {
            "id": 54582424,
            "name": "Blue Mountain Butterspy",
            "desc": "Cannot be Normal Summoned/Set. Must first be Special Summoned by its own effect. When you Normal Summon a Warrior monster: You can Special Summon this card from your hand. Cannot be used as Synchro Material.\r\n\r\n* The above text is unofficial and describes the card's functionality in the OCG.",
            "wordCount": 49
        },
        {
            "id": 16195942,
            "name": "Dark Rebellion Xyz Dragon",
            "desc": "2 Level 4 monsters\nYou can detach 2 materials from this card, then target 1 face-up monster your opponent controls; its ATK becomes half its current ATK, and if it does, this card gains that lost ATK.",
            "wordCount": 37
        },
        {
            "id": 359563,
            "name": "Evilswarm Nightmare",
            "desc": "2 Level 4 DARK monsters\nWhen your opponent Special Summons a monster(s) (except during the Damage Step): You can detach 1 material from this card; change that Special Summoned monster(s) to face-down Defense Position.",
            "wordCount": 34
        },
        {
            "id": 10802915,
            "name": "Tour Guide From the Underworld",
            "desc": "When this card is Normal Summoned: You can Special Summon 1 Level 3 Fiend monster from your hand or Deck, but negate its effects, also it cannot be used as Synchro Material.",
            "wordCount": 32
        },
        {
            "id": 95992081,
            "name": "Leviair the Sea Dragon",
            "desc": "2 Level 3 monsters\nOnce per turn: You can detach 1 material from this card, then target 1 banished Level 4 or lower monster; Special Summon that target to your field.",
            "wordCount": 31
        },
        {
            "id": 65884091,
            "name": "Evilswarm Thanatos",
            "desc": "2 Level 4 DARK monsters\nOnce per turn (Quick Effect): You can detach 1 material from this card; this face-up card is unaffected by other monster effects this turn.",
            "wordCount": 29
        },
        {
            "id": 19353570,
            "name": "Kagemucha Knight",
            "desc": "When you Normal Summon a Level 3 monster: You can Special Summon this card from your hand. Cannot be used as Synchro Material.",
            "wordCount": 23
        },
        {
            "id": 674561,
            "name": "Dark Eruption",
            "desc": "Target 1 DARK monster with 1500 or less ATK in your GY; add that target to your hand.",
            "wordCount": 18
        },
        {
            "id": 28985331,
            "name": "Armageddon Knight",
            "desc": "When this card is Summoned: You can send 1 DARK monster from your Deck to the GY.",
            "wordCount": 17
        },
        {
            "id": 56410040,
            "name": "Junk Forward",
            "desc": "If you control no monsters, you can Special Summon this card (from your hand).",
            "wordCount": 14
        },
        {
            "id": 32807846,
            "name": "Reinforcement of the Army",
            "desc": "Add 1 Level 4 or lower Warrior monster from your Deck to your hand.",
            "wordCount": 14
        },
        {
            "id": 43898403,
            "name": "Twin Twisters",
            "desc": "Discard 1 card, then target up to 2 Spells/Traps on the field; destroy them.",
            "wordCount": 14
        },
        {
            "id": 81439173,
            "name": "Foolish Burial",
            "desc": "Send 1 monster from your Deck to the GY.",
            "wordCount": 9
        },
        {
            "id": 83764718,
            "name": "Monster Reborn",
            "desc": "Target 1 monster in either GY; Special Summon it.",
            "wordCount": 9
        },
        {
            "id": 53129443,
            "name": "Dark Hole",
            "desc": "Destroy all monsters on the field.",
            "wordCount": 6
        }
    ],
    "mct": {
        "mean": 63,
        "median": 73,
        "mode": 14
    }
};

export const testingDecks: Record<SampleDecks, TestingDeckData> = {
    dddData,
    srData,
    pkfireData,
};

//#endregion testingDecks

//#region testingDescs

type TestingDescData = Pick<YGOWordcount, 'desc' | 'wordCount'>;

type SampleDescs = 'wordy' | 'special' | 'pendulum'

export const testingDescs: Record<SampleDescs, TestingDescData[]> = {
    wordy: [
        {
            desc: 'test',
            wordCount: 1,
        },
        {
            desc: 'another test',
            wordCount: 2,
        },
        // {
        //     desc: 'an invalid test',
        //     wordCount: 30,
        // },
        {
            desc: 'yet another test',
            wordCount: 3,
        },
    ],
    special: [
        {
            desc: 'test',
            wordCount: 1,
        },
    ],
    pendulum: [
        {
            desc: 'test',
            wordCount: 1,
        },
    ],
};

//#endregion testingDescs
