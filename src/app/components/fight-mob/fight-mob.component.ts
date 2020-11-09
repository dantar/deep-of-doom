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
  effects: {[id:string]: ()=>void};
  slotinfo: ActionSlot;

  lifebar = {
    'fight': {fill: '#aa2222', stroke: '#880000'},
    'search': {fill: '#aa22aa', stroke: '#880088'},
  }

  fleeEnabled: boolean;

  builder: ActionSlotBuilder;
  actions: ActionSlot[];
  action: ActionSlot;
  drawables: ActionSlot[];
  life: number;
  maxlife: number;

  activeMenu: string;

  outcome: string;

  maxrowsize = 10;

  brains: {[id:string]: () => void} = {
    fight: () => {
      this.adjustLife(-1);
    },
    fight2: () => {
      this.adjustLife(-2);
    },
    hit: () => {
      this.shared.life(-1);
      this.outcome = (this.shared.hero.life <= 0) ? 'died': this.outcome;
    },
    hit2: () => {
      this.shared.life(-2);
      this.outcome = (this.shared.hero.life <= 0) ? 'died': this.outcome;
    },
    gold: () => {
      this.shared.gold(1);
    },
    trap: () => {
      this.shared.poison(1);
      this.outcome = (this.shared.hero.life <= 0) ? 'died': this.outcome;
    },
    poison: () => {
      this.shared.poison(1);
      this.outcome = (this.shared.hero.life <= 0) ? 'died': this.outcome;
    },
    search: () => {
      this.adjustLife(-1);
    },
    flee: () => {
      this.outcome = 'fled';
    },
    stuff: () => {
      this.shared.reward(new HeroRewardItem(this.items.items['healingStone']));
    },
    drainmana: () => {
      this.shared.manaOrLife(-1);
      this.outcome = (this.shared.hero.life <= 0) ? 'died': this.outcome;
    },
    replace: () => {
      // this.outcome = this.action.action;
    }
  }

  constructor(
    public gui: GuiCommonsService,
    public fightinfo: FightActionsService,
    private game: GamesCommonService,
    private shared: SharedDataService,
    private master: DungeonMasterService,
    private audio: AudioPlayService,
    private items: ItemsLoreService,
    ) { }

  ngOnInit(): void {
    this.effects = {
      'strikeMob': () => {
        this.builder.newActionSlot('fight');
        this.refreshDrawables();
      },
      'strikeMob2': () => {
        this.builder.newActionSlot('fight2');
        this.refreshDrawables();
      },
      'healLife1': () => {
        this.builder.newActionSlot('life1');
        this.refreshDrawables();
      },
      'strongerMob': () => {
        this.fight.lifeUp()
        this.builder.newActionSlot(this.mobStats.challenge);
        this.refreshDrawables();
      },
      'weakerMob': () => {
        this.builder.newActionSlot(this.mobStats.challenge);
        this.refreshDrawables();
      },
      'mobPoison': () => {
        this.builder.newActionSlot('poison');
        this.refreshDrawables();
      },
      'mobHit': () => {
        this.builder.newActionSlot('hit');
        this.refreshDrawables();
      },
      'mobHit2': () => {
        this.builder.newActionSlot('hit2');
        this.refreshDrawables();
      },
      'loot1': () => {
        this.builder.newActionSlot('stuff');
        this.refreshDrawables();
      }
    }
    this.activeMenu = null;
    this.fleeEnabled = true;
    this.outcome = null;
    this.spellsession = {
      exaustedSpells: [],
      spellEffects: this.effects,
      cast: (spell: MageSpell) => {
        this.spellsession.exaustedSpells.push(spell.name);
        spell.effects.forEach(e => this.spellsession.spellEffects[e]());
      },
      enabled: (spell: MageSpell) => {
        return !this.spellsession.exaustedSpells.includes(spell.name) && spell.effects.filter(e => !Object.keys(this.spellsession.spellEffects).includes(e)).length === 0 ;
      },
    };
    this.itemsession = {
      itemEffects: this.effects,
      use: (item) => {
        item.effects.forEach(e => this.itemsession.itemEffects[e]());
        this.shared.hero.inventory.splice(this.shared.hero.inventory.indexOf(item.name), 1);
      },
      enabled: (item) => {
        return item.effects.filter(e => !Object.keys(this.itemsession.itemEffects).includes(e)).length === 0 ;
      },
    };
    this.mobStats = this.master.mobs[this.mob.name];
    this.fight = new FightBuilder(this.mobStats);
    // fight setup
    this.builder = new ActionSlotBuilder(this.fight.mobMaxLife, this.mobStats.challenge);
    this.mobStats.actions.forEach(a => this.builder.newActionSlot(a));
    // mob tags
    this.mob.tags.forEach(t => this.mobStats.tags[t].forEach(e => this.effects[e]()));
    // supports
    this.support.forEach(m => {
      let supporter = this.master.mobs[m.name];
      if (supporter.supports) {
        supporter.supports(this.mobStats).forEach(e => this.effects[e]());
      }
      if (this.mobStats.supported) {
        this.mobStats.supported(supporter).forEach(e => this.effects[e]());
      }
    });
    // setup life
    this.maxlife = this.fight.mobMaxLife;
    this.life = this.maxlife;
    this.actions = this.builder.sofar;
    this.drawables = this.actions.map(a => a);
  }

  adjustLife(arg0: number) {
    this.life = Math.max(0, this.life + arg0);
    if (this.life <= 0) {
      this.outcome = this.master.mobs[this.mob.name].done;
    }
  }

  // clicks

  nextClick() {
    if (this.outcome) {
      return;
    }
    this.audio.play('action');
    this.action = this.game.randomPop(this.drawables);
    this.fightinfo[this.action.action.name].effect(this.shared);
    this.action.available = false;
    if (!this.shared.fight.outcome && this.drawables.length == 0) {
      this.outcome = 'fled';
    }
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
    for (let index = 0; index < this.maxlife; index++) {
      result.push({
        index: index,
        full: index < this.life,
        x: 40 + index * 120 / this.maxlife,
        width: 120 / this.maxlife,
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
    return `translate(${100 - maxwidth / 2},10) scale(${maxwidth / 100 / slot.indexof}) translate(${100 * slot.index},0)`;
  };

  clickSlot(slot: ActionSlot) {
    this.audio.play('action');
    this.slotinfo = slot;
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

