import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fallInAppear } from '../animations';
import { DungeonMasterService, FightBuilder } from 'src/app/services/dungeon-master.service';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { MazeMob } from 'src/app/models/maze-map.model';
import { SpellSession } from 'src/app/models/hero.model';

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
  @Output() done = new EventEmitter<string>();

  fight: FightBuilder;
  spellsession: SpellSession;
  isFleeing: boolean;

  builder: ActionSlotBuilder;
  actions: ActionSlot[];
  action: ActionSlot;
  drawables: ActionSlot[];
  life: number;
  maxlife: number;
  exit: boolean;

  spellbookVisible: boolean;
  inventoryVisible: boolean;

  outcome: string;

  maxrowsize = 10;

  brains: {[id:string]: () => void} = {
    tough: () => {
      this.adjustLife(-1);
    },
    weak: () => {
      this.adjustLife(-1);
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
    staff: () => {
      this.adjustLife(-1);
    },
    exit: () => {
      this.exit = true;
      this.outcome = 'exit';
    },
    flee: () => {
      this.outcome = 'fled';
    },
  }

  constructor(
    private game: GamesCommonService,
    private shared: SharedDataService,
    private master: DungeonMasterService,
    private audio: AudioPlayService,
    ) { }

  ngOnInit(): void {
    this.spellbookVisible = false;
    this.inventoryVisible = false;
    this.isFleeing = false;
    this.outcome = null;
    this.spellsession = {
      acceptedEffects: ['strikeMob', 'preventPoison', 'preventHit', 'preventDrain'], 
      exaustedSpells: [],
      spellEffects: {
        'strikeMob': () => {
          this.builder.newActionSlot('tough');
          this.refreshDrawables();
        }
      }
    };
    let mobStats = this.master.mobs[this.mob.name];
    this.fight = new FightBuilder(mobStats);
    this.mob.tags.forEach(t => mobStats.tags[t](this.fight));
    //
    this.maxlife = this.fight.mobMaxLife;
    this.life = this.maxlife;
    this.exit = false;
    this.builder = new ActionSlotBuilder(this.fight.mobMaxLife);
    this.fight.fightActions.forEach(a => this.builder.newActionSlot(a));
    this.actions = this.builder.sofar;
    this.drawables = this.actions.map(a => a);
  }

  adjustLife(arg0: number) {
    this.life = Math.max(0, this.life + arg0);
    if (this.life <= 0) {
      this.outcome = 'win';
    }
  }

  // clicks

  nextClick() {
    if (this.outcome) {
      return;
    }
    this.audio.play('action');
    this.action = this.game.randomPop(this.drawables);
    this.action.available = false;
    this.brains[this.action.action]();
  }

  leftHandClick() {
    if (this.outcome) {
      this.spellbookVisible = false;
      return;
    }
    this.spellbookVisible = ! this.spellbookVisible;
  }

  refreshDrawables() {
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
    console.log(slot);
    this.audio.play('action');
  }

  clickOpenInventory() {
    if (this.outcome) {
      this.inventoryVisible = false;
      return;
    }
    this.inventoryVisible = ! this.inventoryVisible;
  }

  clickFlee() {
    this.audio.play('action');
    if (!this.isFleeing) {
      this.builder.newActionSlot('flee');
      this.builder.newActionSlot('flee');
      this.refreshDrawables();
    }
    this.isFleeing = true;
  }

}

class ToughSlot {
  index: number;
  full: boolean;
  width: number;
  x: number;
}

class ActionSlotBuilder {

  sofar: ActionSlot[];

  constructor(life: number) {
    this.sofar = [];
    for (let index = 0; index < life; index++) {
      this.newActionSlot('tough');
    }
  }

  newActionSlot(a: string): ActionSlot {
    let slot: ActionSlot = {action: a, index: this.sofar.length, available: true, indexof: null};
    this.sofar.push(slot);
    this.sofar.forEach(s => s.indexof = this.sofar.length);
    return slot;
  }

}

class ActionSlot {

  action: string;
  index: number;
  indexof: number;
  available: boolean;

}

