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
  component: any;
}

