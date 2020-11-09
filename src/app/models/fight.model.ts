import { SharedDataService } from '../services/shared-data.service';
import { MazeMob } from './maze-map.model';

export class MobStats {
  name: string;
  actions: string[];
  life: number;
  challenge: string;
  exp: number;
  blocks: boolean;
  component: any;
  tags: {[id: string]: string[] };
  done: string;
  keywords: string[];
  supports?: (mob: MobStats) => string[];
  supported?: (mob: MobStats) => string[];
}

export class FightBuilder {
  mobLife: number;
  mobMaxLife: number;

  constructor(stats: MobStats) {
    this.mobLife = stats.life;
    this.mobMaxLife = stats.life;
  }

  lifeUp() {
    this.mobMaxLife++;
    this.mobLife++;
  }

}

export class FightAction {
  name: string;
  description: string[];
  effect: (shared: SharedDataService) => void;
  value: number;
}

export class FightData {

  mob: MazeMob;
  location: string;
  actions: ActionStats[];
  life: number;
  maxlife: number;
  tags: string[];
  outcome: string;

}

export class ActionStats {
  name: string;
  available: boolean;
  constructor(name) {
    this.name = name;
    this.available = true;
  }
}