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
}

