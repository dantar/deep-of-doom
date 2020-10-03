import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DungeonMasterService {

  static _mobs: MobStats[] = [];
  static registerMob(mob: MobStats) {
    this._mobs.push(mob);
  }

  mobs: {[id: string]: MobStats};
  constructor() {
    this.mobs = {};
    DungeonMasterService._mobs.forEach(m => this.mobs[m.name] = m);
  }

}

export class MobStats {
  name: string;
  actions: string[];
  life: number;
}

DungeonMasterService.registerMob(
  {
    name: 'skeleton',
    actions: ['tough', 'tough', 'hit', 'hit', 'gold'],
    life: 2,
  }
);

DungeonMasterService.registerMob(
  {
    name: 'spider',
    actions: ['tough', 'tough', 'trap', 'trap', 'gold', 'gold'],
    life: 2,
  }
);

DungeonMasterService.registerMob(
  {
    name: 'chest',
    actions: ['gold', 'gold', 'tough', 'trap'],
    life: 1,
  }
);

DungeonMasterService.registerMob(
  {
    name: 'exit',
    actions: ['gold', 'exit'],
    life: 1,
  }
);

