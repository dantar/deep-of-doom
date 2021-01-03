import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fallInAppear } from '../animations';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { MazeMob } from 'src/app/models/maze-map.model';
import { HeroItem, HeroRewardItem, ItemSession, MageSpell, SpellSession } from 'src/app/models/hero.model';
import { GuiCommonsService } from 'src/app/services/gui-commons.service';
import { ActionStats, FightAction, FightBuilder, MobStats } from 'src/app/models/fight.model';
import { ItemsLoreService } from 'src/app/services/items-lore.service';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { environment } from 'src/environments/environment';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-fight-mob',
  templateUrl: './fight-mob.component.html',
  styleUrls: ['./fight-mob.component.scss'],
  animations: [
    trigger('stream', [
      transition(':enter', [useAnimation(fallInAppear)]),
    ]),
  ]
})
export class FightMobComponent implements OnInit {

  @Input() mob: MazeMob;
  @Input() support: MazeMob[];
  @Output() done = new EventEmitter<string>();

  mobStats: MobStats;

  fight: FightBuilder;
  spellsession: SpellSession;
  itemsession: ItemSession;
  effects: {[id:string]: (shared: SharedDataService)=>void};
  slotinfo: ActionSlot;
  latestslot: ActionSlot;

  lifebar = {
    'fight': {fill: '#aa2222', stroke: '#880000'},
    'search': {fill: '#aa22aa', stroke: '#880088'},
  }

  fleeEnabled: boolean;

  builder: ActionSlotBuilder;
  actions: ActionSlot[];
  action: ActionSlot;
  drawables: ActionSlot[];

  activeMenu: string;

  maxrowsize = 10;

  constructor(
    public gui: GuiCommonsService,
    public fightinfo: FightActionsService,
    public shared: SharedDataService,
    private game: GamesCommonService,
    private master: DungeonMasterService,
    private audio: AudioPlayService,
    private items: ItemsLoreService,
    ) { }

  ngOnInit(): void {
    this.effects = {
      'strikeMob': (shared: SharedDataService) => {
        this.builder.newActionSlot('fight');
        this.refreshDrawables();
      },
      'strikeMob2': (shared: SharedDataService) => {
        this.builder.newActionSlot('fight2');
        this.refreshDrawables();
      },
      'healLife1': (shared: SharedDataService) => {
        this.builder.newActionSlot('life1');
        this.refreshDrawables();
      },
      'healMana1': (shared: SharedDataService) => {
        this.builder.newActionSlot('mana1');
        this.refreshDrawables();
      },
      'protectPoison1': (shared: SharedDataService) => {
        this.builder.newActionSlot('protectPoison1');
        this.refreshDrawables();
      },
      'protectPoison2': (shared: SharedDataService) => {
        this.builder.newActionSlot('protectPoison2');
        this.refreshDrawables();
      },
      'strongerMob': (shared: SharedDataService) => {
        shared.adjustMobMaxLife(1);
        this.builder.newActionSlot(this.mobStats.challenge);
        this.refreshDrawables();
      },
      'weakerMob': (shared: SharedDataService) => {
        this.builder.newActionSlot(this.mobStats.challenge);
        this.refreshDrawables();
      },
      'mobPoison': (shared: SharedDataService) => {
        this.builder.newActionSlot('poison');
        this.refreshDrawables();
      },
      'mobHit': (shared: SharedDataService) => {
        this.builder.newActionSlot('hit');
        this.refreshDrawables();
      },
      'mobHit2': (shared: SharedDataService) => {
        this.builder.newActionSlot('hit2');
        this.refreshDrawables();
      },
      'loot1': (shared: SharedDataService) => {
        this.builder.newActionSlot('stuff');
        this.refreshDrawables();
      },
      'addAction:drainmana': (shared: SharedDataService) => {
        this.builder.newActionSlot('drainmana');
        this.refreshDrawables();
      },
    }
    this.activeMenu = null;
    this.fleeEnabled = true;
    this.spellsession = {
      exaustedSpells: [],
      spellEffects: this.effects,
      cast: (spell: MageSpell) => {
        this.spellsession.exaustedSpells.push(spell.name);
        spell.effects.forEach(e => this.spellsession.spellEffects[e](this.shared));
      },
      enabled: (spell: MageSpell) => {
        return !this.spellsession.exaustedSpells.includes(spell.name) && spell.effects.filter(e => !Object.keys(this.spellsession.spellEffects).includes(e)).length === 0 ;
      },
    };
    this.mobStats = this.master.mobs[this.mob.name];
    this.fight = new FightBuilder(this.mobStats);
    // fight setup
    this.builder = new ActionSlotBuilder(this.fight.mobMaxLife, this.mobStats.challenge);
    this.mobStats.actions.forEach(a => this.builder.newActionSlot(a));
    // mob tags
    this.mob.tags.forEach(t => this.mobStats.tags[t].forEach(e => this.effects[e](this.shared)));
    // supports
    this.support.forEach(m => {
      let supporter = this.master.mobs[m.name];
      if (supporter.supports) {
        supporter.supports(this.mobStats).forEach(e => this.effects[e](this.shared));
      }
      if (this.mobStats.supported) {
        this.mobStats.supported(supporter).forEach(e => this.effects[e](this.shared));
      }
    });
    // setup life
    this.actions = this.builder.sofar;
    this.drawables = this.actions.map(a => a);
  }

  // clicks

  nextClick() {
    if (this.shared.fight.outcome) {
      return;
    }
    this.audio.play('action');
    this.action = this.pickAction();
    this.fightinfo.actions[this.action.action.name].effect(this.shared);
    this.action.available = false;
    if (!this.shared.fight.outcome && this.drawables.length === 0) {
      this.shared.fight.outcome = 'fled';
    }
  }
  
  pickAction(): ActionSlot {
    if (environment.cheat && this.latestslot) {
      this.drawables.splice(this.drawables.indexOf(this.latestslot), 1);
      let result = this.latestslot;
      this.latestslot = null;
      return result;
    };
    return this.game.randomPop(this.drawables);
  }

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

  refreshDrawables() {
    this.actions = this.builder.sofar;
    this.drawables = this.actions.filter(a => a.available).map(a => a);
  }

  mobToughSlots(): ToughSlot[] {
    let result: ToughSlot[] = [];
    for (let index = 0; index < this.shared.fight.maxlife; index++) {
      result.push({
        index: index,
        full: index < this.shared.fight.life,
        x: 40 + index * 120 / this.shared.fight.maxlife,
        width: 120 / this.shared.fight.maxlife,
        challenge: this.mobStats.challenge,
      });      
    }
    return result;
  }

  attrX(i: number, size: number) {
    return i * 20 + (200 - Math.min(200, size * 20)) / 2;
  }

  attrY(i: number, size: number) {
    return 5;
  }

  rangeArray(len: number) {
    return Array(len).fill(0).map((x,i)=>i);
  }

  slotTransform(slot: ActionSlot): string {
    let maxheight = 40;
    let maxwidth = Math.min(180, slot.indexof * maxheight);
    let layout = new SlotLayout(slot.indexof, slot.index);
    //return layout.transform();
    return `translate(${100 - maxwidth / 2},10) scale(${maxwidth / 100 / slot.indexof}) translate(${100 * slot.index},0)`;
  };

  clickSlot(slot: ActionSlot) {
    this.audio.play('action');
    this.slotinfo = slot;
    this.latestslot = slot === this.latestslot ? null: slot;
    console.log(slot);
  }
  clickCloseSlot() {
    this.audio.play('action');
    this.slotinfo = null;
  }  

  clickFlee() {
    this.audio.play('action');
    this.builder.newActionSlot('flee');
    this.builder.newActionSlot('flee');
    this.refreshDrawables();
    this.fleeEnabled = false;
  }

}

class ToughSlot {
  index: number;
  full: boolean;
  width: number;
  x: number;
  challenge: string;
}

class ActionSlotBuilder {

  sofar: ActionSlot[];

  constructor(life: number, challenge: string) {
    this.sofar = [];
    for (let index = 0; index < life; index++) {
      this.newActionSlot(challenge);
    }
  }

  newActionSlot(a: string): ActionSlot {
    let slot: ActionSlot = {action: new ActionStats(a), index: this.sofar.length, available: true, indexof: null, icon: a.split(':', 1)[0]};
    this.sofar.push(slot);
    this.sofar.forEach(s => s.indexof = this.sofar.length);
    return slot;
  }

}

class ActionSlot {

  action: ActionStats;
  index: number;
  indexof: number;
  available: boolean;
  icon: string;

}

class SlotLayout {

  maxheight = 46;
  maxwidth = 180;
  rows: number;
  elements: number;
  index: number;
  constructor(e: number, i: number) {
    this.elements = e;
    this.index = i;
    this.rows = 1;
    let s = this.size(this.rows);
    while (this.size(this.rows+1) > s) {
      this.rows = this.rows+1;
    }
  }
  size(rows: number) {
    return Math.min(this.maxheight / rows, this.maxwidth / Math.ceil(this.elements / this.rows));
  }
  transform(): string {
    let r = Math.ceil(this.elements / this.rows);
    let y = Math.floor(this.index / r);
    let x = this.index % r;
    let s = this.size(this.rows);
    return `translate(${100 - r * s / 2},10) scale(${1 / s}) translate(${100 * x},${100 * y})`;
  }

}

