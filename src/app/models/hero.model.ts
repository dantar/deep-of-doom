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
    inventory: HeroEquipment[];

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
    traits: string[];
    factory?: (shared: SharedDataService) => HeroEquipment;
    gain?: (shared: SharedDataService, equipment: HeroEquipment) => void;
    lose?: (shared: SharedDataService, equipment: HeroEquipment, howmany: number) => void;
    triggers: {[trigger:string]: GameTrigger};
    static gainCountable(shared: SharedDataService, equipment: HeroEquipmentCountable) {
        let found = shared.hero.inventory.filter(i=>i.name === equipment.name);
        if (found.length === 0) {
            shared.hero.inventory.push(equipment);
        } else {
            let countable = found[0] as HeroEquipmentCountable;
            countable.count = countable.count + equipment.count;
        }
    }
    static loseCountable(shared: SharedDataService, equipment: HeroEquipmentCountable, howmany: number) {
        equipment.count = Math.max(0, equipment.count - howmany);
        if (equipment.count <= 0) {
            shared.hero.inventory.splice(shared.hero.inventory.indexOf(equipment), 1);
        }
    }
}

export class GameTrigger {
    check: (shared: SharedDataService, e: HeroEquipment) => boolean;
    fire: (shared: SharedDataService, e: HeroEquipment) => void;
}

export class HeroEquipment {
    name: string;
}

export class HeroEquipmentCountable extends HeroEquipment {
    name: string;
    count: number;
}

export class SpellSession {
    exaustedSpells: string[];
    spellEffects: {[id:string]: (shared: SharedDataService)=>void};
    cast: (spell: MageSpell) => void;
    enabled: (spell: MageSpell) => boolean;
}

export class ItemSession {
    itemEffects: {[id:string]: (shared: SharedDataService)=>void};
    use: (item: HeroEquipment) => void;
    enabled: (item: HeroEquipment) => boolean;
}

export class HeroReward {
    code: string;
    ok: (shared: SharedDataService) => void;
}

export class HeroRewardItem {
    code = 'item';
    item: HeroEquipment;
    ok(shared: SharedDataService) {
        shared.gainItem(this.item);
    };
    constructor(item: HeroEquipment) {
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