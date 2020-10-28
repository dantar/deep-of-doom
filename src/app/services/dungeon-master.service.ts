import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { Injectable } from '@angular/core';
import { MazeData, MazeMob } from '../models/maze-map.model';
import { MazeGeneratorService } from './maze-generator.service';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class DungeonMasterService {

  static _mobs: MobStats[] = [];
  static registerMob(mob: MobStats) {
    this._mobs.push(mob);
  }

  static _dungeons: DungeonStats[] = [];
  static registerDungeon(dungeon: DungeonStats) {
    this._dungeons.push(dungeon);
  }

  mobs: {[id: string]: MobStats};
  dungeons: {[id: string]: DungeonStats};

  constructor(private generator: MazeGeneratorService) {
    this.mobs = {};
    DungeonMasterService._mobs.forEach(m => this.mobs[m.name] = m);
    this.dungeons = {};
    DungeonMasterService._dungeons.forEach(d => this.dungeons[d.name] = d);
  }

  buildMaze(name: string): MazeData {
    let map = this.generator.generate(this.dungeons[name].size, this.dungeons[name].size); // genera il labirinto
    let exploration = this.generator.exploration(map); // stabilisce ingresso e uscita
    let mobs = this.generator.mobs(map, exploration, this.dungeons[name]);
    let rooms = this.generator.rooms(map, exploration, mobs);
    return {
      map: map,
      exploration: exploration,
      mobs: mobs,
      rooms: rooms,
    }
  }

}

export class MobStats {
  name: string;
  actions: string[];
  life: number;
  exp: number;
  blocks: boolean;
  component: any;
  tags: {[id: string]: (fb: FightBuilder) => void  }
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

export class DungeonStats {
  name: string;
  size: number;
  mobs: MazeMob[];
}
