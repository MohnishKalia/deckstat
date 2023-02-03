export interface YDBCardData {
    name: string;
    num: number;
}

export interface YDBDecklist {
    monsters: YDBCardData[];
    spells: YDBCardData[];
    traps: YDBCardData[];
    extras: YDBCardData[];
    sides: YDBCardData[];
}
export type YDBDecklistEntries = [keyof YDBDecklist, YDBCardData[]][];

export interface YGOCard extends YDBCardData {
    id: number;
    desc: string;
}

export type YGODecklist = Record<keyof YDBDecklist, YGOCard[]>;

export type YGOWordcount = Pick<YGOCard, 'id' | 'name' | 'desc'> & {
    wordCount: number
}
