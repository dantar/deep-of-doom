import { Injectable } from '@angular/core';
import { MazeMap, MazeExploration, MazeMobs, MazeRooms } from '../models/maze-map.model';
import { MazeGeneratorService } from './maze-generator.service';
import { WizardHero } from '../models/hero.model';
import { SavedData } from '../models/saved-data.model';
import { DungeonMasterService } from './dungeon-master.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  hero: WizardHero;

  maze: MazeMap;
  mobs: MazeMobs;
  rooms: MazeRooms;
  exploration: MazeExploration;

  saved: string;

  BASIC_SIZE = 4;

  constructor(private generator: MazeGeneratorService, private master: DungeonMasterService) {
    this.saved = localStorage.getItem('deep-of-doom-saved');
  }

  quitGame() {
    this.hero = null;
    this.maze = null;
    this.mobs = null;
    this.rooms = null;
    this.exploration = null;
  }

  tryLoad() {
    if (this.saved) {
      const data: SavedData = JSON.parse(this.saved);
      this.hero = data.hero;
      this.hero.spells = this.hero.spells ? this.hero.spells : ['dartIm1d1'];
      this.maze = data.maze;
      this.mobs = data.mobs;
      this.rooms = data.rooms;
      this.exploration = data.exploration;
    } else {
      this.newHero();
      this.save();
    }
  }

  save() {
    const data: SavedData = {
      hero: this.hero,
      maze: this.maze,
      exploration: this.exploration,
      mobs: this.mobs,
      rooms: this.rooms,
    };
    this.saved = JSON.stringify(data);
    localStorage.setItem('deep-of-doom-saved', this.saved);
  }

  enterMaze(name: string) {
    let maze = this.master.buildMaze(name);
    this.maze = maze.map;
    this.exploration = maze.exploration;
    this.mobs = maze.mobs;
    this.rooms = maze.rooms;
    this.moveToMaze();
  }

  _exitMaze() {
    this.maze = null;
    this.exploration = null;
    this.mobs = null;
    this.save();
  }

  newHero() {
    this.hero = {
      location: 'village',
      life: 5, 
      mana: 5, 
      poison: 0,
      shadow: 0,
      gold: 0,
      maxlife: 5,
      maxmana: 5,
      exp: 0,
      progress: 0,
      spells: ['dartIm1d1'],
      bookshelf: [],
    };
    this.maze = null;
    this.mobs = null;
    this.exploration = null;
    this.save();
  }

  gold(arg0: number) {
    this.hero.gold = Math.max(0, this.hero.gold + arg0);
  }
  life(arg0: number) {
    this.hero.life = Math.max(0, this.hero.life + arg0);
  }
  mana(arg0: number) {
    this.hero.mana = Math.max(0, this.hero.mana + arg0);
  }
  poison(arg0: number) {
    this.hero.life = Math.max(0, this.hero.life - this.hero.poison);
    this.hero.poison += arg0;
  }
  exp(arg0: number) {
    this.hero.exp = Math.max(0, this.hero.exp + arg0);
  }
  moveToVillage() {
    this.hero.location = 'village';
    this.save();
  }
  moveToWilderness() {
    if (this.hero.life > 0) {
      this.hero.location = 'wilderness';
    }
    this.save();
  }
  moveToMaze() {
    if (this.hero.life > 0 && this.maze != null) {
      this.hero.location = 'maze';
    }
    this.save();
  }

  progressUp() {
    if (this.mazeIsChallenge()) {
      this.hero.progress ++;
    }
  }

  mazeIsChallenge(): boolean {
    return this.maze.sizex >= this.hero.progress + this.BASIC_SIZE
  }

  levelUpLife() {
    this.exp(-this.hero.maxlife);
    this.hero.maxlife += 1;
    this.hero.life += 1;
  }
  levelUpMana() {
    this.exp(-this.hero.maxmana);
    this.hero.maxmana += 1;
    this.hero.mana += 1;
  }

}
