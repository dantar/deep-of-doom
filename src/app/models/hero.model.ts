import { SharedDataService } from '../services/shared-data.service';

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
    story: string[];

    righthand?: string;
    lefthand?: string;

    spells: string[];
    bookshelf: string[];
    inventory: string[];

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

export class HeroItem {
    name: string;
    title: string;
    effects: string[];
    traits: string[];
    spells: string[];
}

export class SpellSession {
    exaustedSpells: string[];
    spellEffects: {[id:string]: (shared: SharedDataService)=>void};
    cast: (spell: MageSpell) => void;
    enabled: (spell: MageSpell) => boolean;
}

export class ItemSession {
    itemEffects: {[id:string]: (shared: SharedDataService)=>void};
    use: (item: HeroItem) => void;
    enabled: (item: HeroItem) => boolean;
}

export class HeroReward {
    code: string;
    ok: (shared: SharedDataService) => void;
}

export class HeroRewardItem {
    code = 'item';
    item: HeroItem;
    ok(shared: SharedDataService) {
        shared.hero.inventory.push(this.item.name);
    };
    constructor(item: HeroItem) {
        this.item = item;
    }
}

export class HeroRewardExp {
    code = 'exp';
    exp: number;
    ok(shared: SharedDataService) {
        shared.exp(this.exp);
    };
    constructor(exp: number) {
        this.exp = exp;
    }
}

export class HeroDialog {
    name: string;
}