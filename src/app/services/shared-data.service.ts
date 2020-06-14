import { Injectable } from '@angular/core';
import { MazeMap } from '../models/maze-map.model';
import { MazeGeneratorService } from './maze-generator.service';
import { WizardHero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  hero: WizardHero;
  maze: MazeMap;

  constructor(private generator: MazeGeneratorService) {
    this.hero = {
      life: 10, 
      mana: 10, 
      gold: 0,
      maxlife: 10,
      maxmana: 10,
      exp: 0,
      level: 1,
    };
  }

  newMaze() {
    this.maze = this.generator.generate(10, 10);
  }

  gold(arg0: number) {
    this.hero.gold = Math.max(0, this.hero.gold + arg0);
  }
  life(arg0: number) {
    this.hero.life = Math.max(0, this.hero.life + arg0);
    if (this.hero.life == 0) {
      this.maze = null;
    }
  }
  mana(arg0: number) {
    this.hero.mana = Math.max(0, this.hero.mana + arg0);
  }

}
