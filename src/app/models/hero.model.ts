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
    bookshelf?: string[];

}

export class MageSpell {
    exp: number;
    name: string;
    title: string;
    mana: number;
    effects: string[];
    unlocks: string[];
    upgrades: string[];
    slot: string;
    traits: string[];
}

export class SpellSession {
    acceptedEffects: string[];
    exaustedSpells: string[];
    spellEffects: {[id:string]: ()=>void}
  }
  