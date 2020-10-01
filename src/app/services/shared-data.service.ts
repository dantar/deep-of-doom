import { Injectable } from '@angular/core';
import { MazeMap, MazeExploration, MazeMobs } from '../models/maze-map.model';
import { MazeGeneratorService } from './maze-generator.service';
import { WizardHero } from '../models/hero.model';
import { SavedData } from '../models/saved-data.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  
  hero: WizardHero;
  maze: MazeMap;

  mobs: MazeMobs;
  exploration: MazeExploration;

  constructor(private generator: MazeGeneratorService) {
    this.tryLoad();
    //
  }

  tryLoad() {
    const saved = localStorage.getItem('deep-of-doom-saved');
    if (saved) {
      const data: SavedData = JSON.parse(saved);
      this.hero = data.hero;
      this.hero.poison = this.hero.poison ? this.hero.poison : 0;
      this.maze = data.maze;
      this.mobs = data.mobs;
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
    };
    localStorage.setItem('deep-of-doom-saved', JSON.stringify(data));
  }

  progressUp() {
    this.hero.progress ++;
    this.save();
  }

  newMaze() {
    let size = Math.min(10, 4 + this.hero.progress);
    this.maze = this.generator.generate(size, size);
    this.exploration = this.generator.exploration(this.maze);
    this.mobs = this.generator.mobs(this.maze, this.exploration);
    this.save();
  }

  exitMaze() {
    this.maze = null;
    this.exploration = null;
    this.mobs = null;
  }

  newHero() {
    this.hero = {
      life: 10, 
      mana: 10, 
      poison: 0,
      gold: 0,
      maxlife: 10,
      maxmana: 10,
      exp: 0,
      level: 1,
      progress: 0,
    };
  }

  gold(arg0: number) {
    this.hero.gold = Math.max(0, this.hero.gold + arg0);
  }
  life(arg0: number) {
    this.hero.life = Math.max(0, this.hero.life + arg0);
    if (this.hero.life == 0) {
      this.exitMaze();
    }
  }
  mana(arg0: number) {
    this.hero.mana = Math.max(0, this.hero.mana + arg0);
  }
  poison(arg0: number) {
    this.hero.life = Math.max(0, this.hero.life - this.hero.poison);
    if (this.hero.life <= 0) {
      this.exitMaze();
    }
    this.hero.poison += arg0;
  }

  exp(arg0: number) {
    this.hero.exp = Math.max(0, this.hero.exp + arg0);
  }

}
