import { Injectable } from '@angular/core';
import { MazeMap, MazeExploration, MazeMobs, MazeRooms, MazeData } from '../models/maze-map.model';
import { MazeGeneratorService } from './maze-generator.service';
import { HeroItem, WizardHero } from '../models/hero.model';
import { SavedData } from '../models/saved-data.model';
import { DungeonMasterService } from './dungeon-master.service';
import { QuestData } from '../models/quest.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  hero: WizardHero;
  maze: MazeData;
  quests: QuestData;

  reward: HeroItem;

  saved: string;

  BASIC_SIZE = 4;

  constructor(private generator: MazeGeneratorService, private master: DungeonMasterService) {
    this.saved = localStorage.getItem('deep-of-doom-saved');
    this.reward = null;
  }

  quitGame() {
    this.hero = null;
    this.maze = null;
  }

  tryLoad() {
    if (this.saved) {
      const data: SavedData = JSON.parse(this.saved);
      this.hero = data.hero;
      this.maze = data.maze;
      this.quests = data.quests;
    } else {
      this.newHero();
      this.save();
    }
  }

  save() {
    const data: SavedData = {
      hero: this.hero,
      maze: this.maze,
      quests: this.quests,
    };
    this.saved = JSON.stringify(data);
    localStorage.setItem('deep-of-doom-saved', this.saved);
  }

  enterMaze(name: string) {
    this.maze = this.master.buildMaze(name);
    this.moveToMaze();
  }

  _exitMaze() {
    this.maze = null;
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
      inventory: [],
    };
    this.maze = null;
    this.quests = {active: [], done: [], rewarded: []}
    this.save();
  }

  gold(arg0: number) {
    this.hero.gold = Math.max(0, this.hero.gold + arg0);
  }
  life(arg0: number) {
    this.hero.life = Math.min(this.hero.maxlife, Math.max(0, this.hero.life + arg0));
  }
  mana(arg0: number) {
    this.hero.mana = Math.min(this.hero.maxmana, Math.max(0, this.hero.mana + arg0));
  }
  manaOrLife(arg0: number) {
    this.hero.mana = this.hero.mana + arg0;
    if (this.hero.mana > this.hero.maxmana) {
      this.life(this.hero.mana - this.hero.maxmana);
      this.hero.mana = this.hero.maxmana;
    }
    if (this.hero.mana < 0) {
      this.life(this.hero.mana);
      this.hero.mana = 0;
    }
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
    return this.maze.map.sizex >= this.hero.progress + this.BASIC_SIZE
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
