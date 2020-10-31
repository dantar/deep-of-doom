export class MobStats {
  name: string;
  actions: string[];
  life: number;
  challenge: string;
  exp: number;
  blocks: boolean;
  component: any;
  tags: {[id: string]: (fb: FightBuilder) => void  };
  done: string;
  keywords: string[];
  supports?: (mob: MobStats) => string[];
  supported?: (mob: MobStats) => string[];
}

export class FightBuilder {
  mobLife: number;
  mobMaxLife: number;
  fightActions: string[];

  constructor(stats: MobStats) {
    this.mobLife = stats.life;
    this.mobMaxLife = stats.life;
    this.fightActions = stats.actions.map(a => a);
  }

  lifeUp() {
    this.mobMaxLife++;
    this.mobLife++;
  }

  push(action: string) {
    this.fightActions.push(action);
  }

}

