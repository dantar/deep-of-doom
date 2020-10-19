import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fallInAppear } from '../animations';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { MazeMob } from 'src/app/models/maze-map.model';

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
  builder: ActionSlotBuilder;
  actions: ActionSlot[];
  action: ActionSlot;
  drawables: ActionSlot[];
  life: number;
  maxlife: number;
  exit: boolean;
  disabled: boolean;

  spellbookVisible: boolean;

  maxrowsize = 10;

  brains: {[id:string]: () => void} = {
    tough: () => {
      this.adjustLife(-1);
    },
    hit: () => {
      this.shared.life(-1);
      this.disabled = (this.shared.hero.life <= 0);
    },
    gold: () => {
      this.shared.gold(1);
    },
    trap: () => {
      this.shared.poison(1);
    },
    staff: () => {
      this.adjustLife(-1);
    },
    exit: () => {
      this.exit = true;
      this.disabled = true;
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
    this.maxlife = this.master.mobs[this.mob.name].life;
    this.life = this.maxlife;
    this.exit = false;
    this.disabled = false;
    this.builder = new ActionSlotBuilder();
    this.actions = this.master.mobs[this.mob.name].actions.map(a => this.builder.newActionSlot(a));
    this.drawables = this.actions.map(a => a);
  }

  adjustLife(arg0: number) {
    this.life = Math.max(0, this.life + arg0);
    if (this.life <= 0) {
      this.disabled = true;
    }
  }

  // clicks

  nextClick() {
    if (this.disabled) {
      return;
    }
    this.audio.play('action');
    this.action = this.game.randomPop(this.drawables);
    this.action.available = false;
    this.brains[this.action.action]();
  }

  leftHandClick() {
    if (this.disabled) {
      this.spellbookVisible = false;
      return;
    }
    this.spellbookVisible = ! this.spellbookVisible;
  }

  dardo1IsCast: boolean;
  dardo2IsCast: boolean;

  dardo1() {
    if (this.dardo1IsCast || this.shared.hero.mana < 1) {
      return;
    }
    this.dardo1IsCast = true;
    this.audio.play('action');
    this.shared.mana(-1);
    ['staff'].forEach(a => {
      this.actions.push(this.builder.newActionSlot(a));
    });
    this.refreshDrawables();
  }
  dardo2() {
    if (this.dardo2IsCast || this.shared.hero.mana < 2) {
      return;
    }
    this.dardo2IsCast = true;
    this.audio.play('action');
    this.shared.mana(-2);
    ['staff'].forEach(a => {
      this.actions.push(this.builder.newActionSlot(a));
    });
    this.refreshDrawables();
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
    console.log(this.audio);
    this.audio.play('action');
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

  constructor() {
    this.sofar = [];
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