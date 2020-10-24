export class WizardHero {

    location: string;

    maxlife: number;
    maxmana: number;

    life: number;
    poison: number;
    mana: number;
    shadow: number;
    gold: number;

    exp: number;
    progress: number;

    righthand?: string;
    lefthand?: string;

    spells: string[];

}

export class MageSpell {
    name: string;
    title: string;
    mana: number;
    effects: string[];
}