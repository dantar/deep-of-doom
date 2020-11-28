import { Injectable } from '@angular/core';
import { MazeMap, MazeExploration, MazeMobs, MazeRooms, MazeData, MazeTile } from '../models/maze-map.model';
import { MazeGeneratorService } from './maze-generator.service';
import { HeroItem, HeroReward, HeroRewardItem, WizardHero } from '../models/hero.model';
import { SavedData } from '../models/saved-data.model';
import { DungeonMasterService } from './dungeon-master.service';
import { QuestData } from '../models/quest.model';
import { ActionStats, FightData } from '../models/fight.model';
import { GamesCommonService } from './games-common.service';
import { ItemsLoreService } from './items-lore.service';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  hero: WizardHero;
  maze: MazeData;
  quests: QuestData;
  fight: FightData;

  rewards: HeroReward[];

  saved: string;

  BASIC_SIZE = 4;

  constructor(
    private master: DungeonMasterService,
    private games: GamesCommonService,
    private items: ItemsLoreService,
    ) {
    this.saved = localStorage.getItem('deep-of-doom-saved');
    this.rewards = [];
  }

  quitGame() {
    this.hero = null;
    this.maze = null;
  }

  reward(...rewards: HeroReward[]) {
    this.rewards.push(...rewards);
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

  popFightTag(...tags: string[]): string {
    let match: string = null;
    this.fight.tags
    .filter(t => tags.indexOf(t) >= 0)
    .forEach(t => {
      if (match === null || tags.indexOf(t) < tags.indexOf(match)) {
        match = t;
      }
    });
    if (match) {
      this.fight.tags.splice(this.fight.tags.indexOf(match), 1);
    }
    return match;
  }
  gold(arg0: number) {
    this.hero.gold = Math.max(0, this.hero.gold + arg0);
  }
  life(arg0: number) {
    this.hero.life = Math.min(this.hero.maxlife, Math.max(0, this.hero.life + arg0));
    if (this.fight && this.hero.life <= 0) {
      this.fight.outcome = 'died';
    }
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
  adjustMobMaxLife(arg0: number) {
    this.fight.maxlife = Math.max(1, this.fight.life + arg0);
    this.adjustMobLife(1);
  }
  adjustMobLife(arg0: number) {
    this.fight.life = Math.min(Math.max(0, this.fight.life + arg0), this.fight.maxlife);
    if (this.fight.life <= 0) {
      this.fight.outcome = this.master.mobs[this.fight.mob.name].done;
    }
  }
  rewardLoot(level: number) {
    let loot = 'loot' + level;
    if (this.maze[loot].length === 0) {
      this.maze[loot] = this.master.generateLoot(this.master.dungeons[this.maze.name][loot]);
    }
    let name: string = this.games.randomPop(this.maze[loot]);
    this.reward(new HeroRewardItem(this.items.items[name]));
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

  startEncounter(tile: MazeTile) {
    let mobstats = this.maze.mobs.mobs[MazeTile.coords(tile)];
    let mob = this.master.mobs[mobstats.name];
    this.fight = {
      life: mob.life,
      maxlife: mob.life,
      actions: mob.actions.map(a=> new ActionStats(a)),
      location: MazeTile.coords(tile),
      mob: mobstats,
      tags: [],
      outcome: null,
    }
  }
  
  endEncounter() {
    this.fight = null;
  }  

}
