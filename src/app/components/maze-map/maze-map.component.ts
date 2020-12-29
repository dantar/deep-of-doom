import { Component, OnInit } from '@angular/core';
import { MazeMap, MazeTile, MazeInsight, MazeExploration, MazeMob } from 'src/app/models/maze-map.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { MazeExplorer } from 'src/app/services/maze-generator.service';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { environment } from 'src/environments/environment';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';
import { HeroRewardExp, ItemSession, SpellSession } from 'src/app/models/hero.model';
import { GuiCommonsService } from 'src/app/services/gui-commons.service';
import { QuestBookService } from 'src/app/services/quest-book.service';

@Component({
  selector: 'app-maze-map',
  templateUrl: './maze-map.component.html',
  styleUrls: ['./maze-map.component.scss']
})
export class MazeMapComponent implements OnInit {

  showall: boolean;

  effects: {[id: string]: ()=>void};

  spellsession: SpellSession;
  itemsession: ItemSession;

  //encounterTile: string;
  //encounter: MazeMob;
  support: MazeMob[];
  allwalls: MazeWall[];

  activeMenu: string;

  constructor(
    public shared: SharedDataService,
    public game: GamesCommonService,
    public audio: AudioPlayService,
    public master: DungeonMasterService,
    public gui: GuiCommonsService,
    private quests: QuestBookService,
  ) { }
  
  ngOnInit(): void {
    this.allwalls = [];
    for (let y = 0; y <= this.shared.maze.map.sizey; y++) {
      for (let x = 0; x <= this.shared.maze.map.sizex; x++) {
        this.allwalls.push(new MazeWall(x, y, this.shared));
      }
    }
    this.shared.maze.map.sizey
    this.activeMenu = null;
    this.effects = {
      'healLife1': () => {
        this.shared.life(1);
      },
      'healMana1': () => {
        this.shared.mana(1);
      },
    };
    this.spellsession = {
      spellEffects: this.effects,
      exaustedSpells: [],
      cast: (spell) => {
        spell.effects.forEach(e => this.spellsession.spellEffects[e](this.shared));
      },
      enabled: (spell) => spell.effects.filter(e => !Object.keys(this.spellsession.spellEffects).includes(e)).length === 0,
    };
    this.itemsession = {
      itemEffects: this.effects,
      use: (item) => {
        item.effects.forEach(e => this.itemsession.itemEffects[e](this.shared));
        this.shared.hero.inventory.splice(this.shared.hero.inventory.indexOf(item.name), 1);
      },
      enabled: (item) => item.effects.filter(e => !Object.keys(this.spellsession.spellEffects).includes(e)).length === 0,
    };
    this.showall = environment.showall;
  }
  
  // actions

  clickTile(t: MazeTile) {
    this.audio.play('action');
    MazeExploration.draw(this.shared.maze.exploration, t);
    let mob = this.shared.maze.mobs.mobs[MazeMap.coords(t)];
    if (!mob || !this.master.mobs[mob.name].blocks) {
      this.expandDrawable(t);
    }
    this.shared.save();
  }

  expandDrawable(t: MazeTile) {
    MazeExploration.open(this.shared.maze.exploration, MazeMap.connected(this.shared.maze.map, t));
    this.shared.save();
  }

  clickMonster(tile: MazeTile) {
    this.audio.play('action');
    this.shared.startEncounter(tile);
    //this.encounterTile = MazeTile.coords(tile);
    //this.encounter = this.shared.maze.mobs.mobs[this.encounterTile];
    this.support = this.shared.maze.exploration.drawn
    .filter(d => d != MazeTile.coords(tile))
    .map(d => this.shared.maze.mobs.mobs[d])
    .filter(m => m);
  }

  doneMonster(done: string) {
    let mazemob = this.shared.fight.mob;
    let mob = this.master.mobs[mazemob.name];
    let parts = done.split(':', 2);
    let event = parts[0];
    let detail = parts.length > 0 ? parts[1] : null;
    switch (event) {
      case 'exit':
        this.deleteMob();
        if (mob.exp != 0) this.shared.reward(new HeroRewardExp(mob.exp));
        this.checkQuests();
        this.shared.moveToWilderness();
        this.shared.progressUp();
        break;
      case 'fled':
        break;
      case 'win':
        if (mob.exp != 0) this.shared.reward(new HeroRewardExp(mob.exp));
        this.deleteMob();
        this.expandDrawable(MazeMap.tile(this.shared.maze.map, this.shared.fight.location));
        break;
      case 'replace':
        this.shared.exp(mob.exp);
        this.replaceMob(detail);
        if (!this.master.mobs[detail].blocks) {
          this.expandDrawable(MazeMap.tile(this.shared.maze.map, this.shared.fight.location));
        }
        break;
      case 'died':
        this.shared.moveToVillage();
        break;
      default:
        break;
    }
    this.shared.endEncounter();
    this.shared.save();
  }

  checkQuests() {
    this.quests.checkQuests();
  }

  deleteMob() {
    delete this.shared.maze.mobs.mobs[this.shared.fight.location];
  }

  replaceMob(mob: string) {
    // FIXME: deprecato
    this.shared.maze.mobs.mobs[this.shared.fight.location] = {name: mob, tags: []};
  }

  // html

  coords(t: MazeTile) {
    return MazeTile.coords(t);
  }

  position(t: MazeTile): string {
    return `transform: translate(${100 * t.x}px, ${100 * t.y}px)`
  }

  viewBox() {
    return `0 0 ${100 * this.shared.maze.map.sizex} ${100 * this.shared.maze.map.sizey}`;
  }

  isDrawable(t: MazeTile): boolean {
    return this.shared.maze.exploration.drawable.includes(MazeMap.coords(t));
  }

  isDrawn(t: MazeTile): boolean {
    return this.shared.maze.exploration.drawn.includes(MazeMap.coords(t));
  }

  showMob(cell: MazeTile) {
    return this.showall || (this.isDrawn(cell) && this.shared.maze.mobs.mobs[MazeTile.coords(cell)])
  }

  // menu

  clickSpellbook() {
    this.audio.play('action');
    this.toggleMenu('spellbook');
  }

  clickInventory() {
    this.audio.play('action');
    this.toggleMenu('inventory');
  }

  private toggleMenu(menu: string) {
    this.activeMenu = this.activeMenu === menu ? null: menu;
  }  
  
}

class MazeWall {
  x: number;
  y: number;
  shared: SharedDataService;
  private _stones: MazeWallStone[];
  private _northStones: boolean;
  private _westStones: boolean;
  constructor(x: number, y: number, shared: SharedDataService) {
    this.x = x;
    this.y = y;
    this.shared = shared;
    this._stones = [];
    this._northStones = false;
    this._westStones = false;
  };
  northVisible(): boolean {
    return this.shared.maze.exploration.drawn.includes(`${this.x}-${this.y}`) || this.shared.maze.exploration.drawn.includes(`${this.x}-${this.y-1}`);
  };
  westVisible(): boolean {
    return this.shared.maze.exploration.drawn.includes(`${this.x}-${this.y}`) || this.shared.maze.exploration.drawn.includes(`${this.x-1}-${this.y}`);
  };
  areaVisible(): boolean {
    return this.shared.maze.exploration.drawn.includes(`${this.x}-${this.y}`);
  };
  stones(): MazeWallStone[] {
    if (this.northVisible() && !this._northStones) {
      this._northStones = true;
      for (let n = 1; n < 8; n++) {
        if (![3,4,5].includes(n) || this.y >= this.shared.maze.map.sizey || this.shared.maze.map.rows[this.x][this.y].north === 'wall')
          this._stones.push(new MazeWallStone(n, 0, this.shared));
      }
      this._stones.sort((a, b) => a.yy() < b.yy() ? -1: a.yy() > b.yy() ? 1 : 0);
    };
    if (this.westVisible() && ! this._westStones) {
      this._westStones = true;
      for (let n = 1; n < 8; n++) {
        if (![3,4,5].includes(n) || this.x >= this.shared.maze.map.sizex || this.shared.maze.map.rows[this.x][this.y].west === 'wall')
          this._stones.push(new MazeWallStone(0, n, this.shared));
      }
      this._stones.sort((a, b) => a.yy() < b.yy() ? -1: a.yy() > b.yy() ? 1 : 0);
    };
    return this._stones;
  }
  transform(): string {
    return `translate(${this.x*100}, ${this.y*100})`;
  }

}

class MazeWallStone {
  x: number;
  y: number;
  r: number;
  dx: number;
  dy: number;
  shared: SharedDataService;
  constructor(x: number, y: number, shared: SharedDataService) {
    this.x = x;
    this.y = y;
    this.shared = shared;
    this.r = this.randomInt(1, 4);
    this.dx = this.randomInt(-4, 4);
    this.dy = this.randomInt(-4, 4);
  };
  transform(): string {
    return `translate(${this.x*12.5 + this.dx}, ${this.yy()})`;
  }
  xlink(): string {
    return `#wall-stone-${this.r}`;
  }
  randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  yy(): number {
    return this.y*12.5 + this.dy;
  }


}