import { Injectable } from '@angular/core';
import { MazeMap, MazeExploration, MazeMobs } from '../models/maze-map.model';
import { MazeGeneratorService } from './maze-generator.service';
import { WizardHero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  hero: WizardHero;
  maze: MazeMap;
  level: number;

  mobs: MazeMobs;
  exploration: MazeExploration;

  constructor(private generator: MazeGeneratorService) {
    this.newHero();
  }

  newMaze() {
    this.maze = this.generator.generate(4 + this.level, 4 + this.level);
    this.exploration = this.generator.exploration(this.maze);
    this.mobs = this.generator.mobs(this.maze, this.exploration);
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
      gold: 0,
      maxlife: 10,
      maxmana: 10,
      exp: 0,
      level: 1,
    };
    this.level = 1;
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

  exp(arg0: number) {
    this.hero.exp = Math.max(0, this.hero.exp + arg0);
  }

}
