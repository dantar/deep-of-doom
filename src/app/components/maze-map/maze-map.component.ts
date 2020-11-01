import { Component, OnDestroy, OnInit } from '@angular/core';
import { MazeMap, MazeTile, MazeInsight, MazeExploration, MazeMob } from 'src/app/models/maze-map.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { MazeExplorer } from 'src/app/services/maze-generator.service';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { environment } from 'src/environments/environment';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';
import { ItemSession, SpellSession } from 'src/app/models/hero.model';
import { GuiCommonsService } from 'src/app/services/gui-commons.service';

@Component({
  selector: 'app-maze-map',
  templateUrl: './maze-map.component.html',
  styleUrls: ['./maze-map.component.scss']
})
export class MazeMapComponent implements OnInit, OnDestroy {

  showall: boolean;

  drawn: string[];
  drawable: string[];

  rooms: { [id: string]: string };
  effects: {[id: string]: ()=>void};

  explorer: MazeExplorer;
  entry: MazeTile;
  exit: MazeTile;

  spellsession: SpellSession;
  itemsession: ItemSession;

  encounterTile: string;
  encounter: MazeMob;
  support: MazeMob[];

  activeMenu: string;

  constructor(
    public shared: SharedDataService,
    public game: GamesCommonService,
    public audio: AudioPlayService,
    public master: DungeonMasterService,
    public gui: GuiCommonsService,
  ) { }
  
  ngOnInit(): void {
    this.activeMenu = null;
    this.effects = {
      'healLife1': () => {
        this.shared.life(1);
      },
    };
    this.spellsession = {
      spellEffects: this.effects,
      exaustedSpells: [],
      cast: (spell) => {
        spell.effects.forEach(e => this.spellsession.spellEffects[e]());
      },
      enabled: (spell) => spell.effects.filter(e => !Object.keys(this.spellsession.spellEffects).includes(e)).length === 0,
    };
    this.itemsession = {
      itemEffects: this.effects,
      use: (item) => {
        item.effects.forEach(e => this.itemsession.itemEffects[e]());
        this.shared.hero.inventory.splice(this.shared.hero.inventory.indexOf(item.name), 1);
      },
      enabled: (item) => item.effects.filter(e => !Object.keys(this.spellsession.spellEffects).includes(e)).length === 0,
    };
    this.showall = environment.showall;
    this.drawn = this.shared.exploration.drawn;
    this.drawable = this.shared.exploration.drawable;
    this.rooms = this.shared.rooms.rooms;
    this.explorer = new MazeExplorer(this.shared.maze);
    const entry = MazeMap.tile(this.shared.maze, this.shared.exploration.entry);
    this.explorer.explore(entry.x, entry.y);
    this.audio.theme('dungeon-theme-01');
  }
  
  ngOnDestroy(): void {
    this.audio.theme(null);
  }

  // actions

  clickTile(t: MazeTile) {
    this.audio.play('action');
    MazeExploration.draw(this.shared.exploration, t);
    let mob = this.shared.mobs.mobs[MazeMap.coords(t)];
    if (!mob || !this.master.mobs[mob.name].blocks) {
      this.expandDrawable(t);
    }
    this.shared.save();
  }

  expandDrawable(t: MazeTile) {
    MazeExploration.open(this.shared.exploration, MazeMap.connected(this.shared.maze, t));
    this.shared.save();
  }

  clickMonster(tile: MazeTile) {
    this.audio.play('action');
    this.encounterTile = this.explorer.coords(tile);
    this.encounter = this.shared.mobs.mobs[this.encounterTile];
    this.support = this.drawn
    .filter(d => d != this.encounterTile)
    .map(d => this.shared.mobs.mobs[d])
    .filter(m => m);
  }

  doneMonster(done: string) {
    let mobStats = this.shared.mobs.mobs[this.encounterTile];
    let mob = this.master.mobs[mobStats.name];
    let parts = done.split(':', 2);
    let event = parts[0];
    let detail = parts.length > 0 ? parts[1] : null;
    switch (event) {
      case 'exit':
        this.shared.exp(mob.exp);
        this.shared.moveToWilderness();
        this.shared.progressUp();
        break;
      case 'fled':
        this.encounter = null;
        this.encounterTile = null;      
        break;
      case 'win':
        this.shared.exp(mob.exp);
        this.deleteMob();
        this.expandDrawable(MazeMap.tile(this.shared.maze, this.encounterTile));
        this.encounter = null;
        this.encounterTile = null;      
        break;
      case 'replace':
        this.shared.exp(mob.exp);
        this.replaceMob(detail);
        if (!this.master.mobs[detail].blocks) {
          this.expandDrawable(MazeMap.tile(this.shared.maze, this.encounterTile));
        }
        this.encounter = null;
        this.encounterTile = null;      
        break;
      case 'died':
        this.shared.moveToVillage();
        break;
      default:
        break;
    }
    this.shared.save();
  }

  deleteMob() {
    delete this.shared.mobs.mobs[this.encounterTile];
  }

  replaceMob(mob: string) {
    this.shared.mobs.mobs[this.encounterTile] = {name: mob, tags: []};
  }

  // html

  position(t: MazeTile): string {
    return `transform: translate(${100 * t.x}px, ${100 * t.y}px)`
  }

  distance(t: MazeTile): number {
    return this.explorer.pathfor[this.explorer.coords(t)].length;
  }

  viewBox() {
    return `0 0 ${100 * this.shared.maze.sizex} ${100 * this.shared.maze.sizey}`;
  }

  isDrawable(t: MazeTile): boolean {
    return this.drawable.includes(MazeMap.coords(t));
  }

  isDrawn(t: MazeTile): boolean {
    return this.drawn.includes(MazeMap.coords(t));
  }

  showMob(cell: MazeTile) {
    return this.showall || (this.isDrawn(cell) && this.shared.mobs.mobs[this.explorer.coords(cell)])
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

