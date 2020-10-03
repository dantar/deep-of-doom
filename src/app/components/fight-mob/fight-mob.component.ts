import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fallInAppear } from '../animations';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';

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

  @Input() mob: string;
  @Output() done = new EventEmitter<string>();
  builder: ActionSlotBuilder;
  actions: ActionSlot[];
  action: ActionSlot;
  drawables: ActionSlot[];
  life: number;
  exit: boolean;
  disabled: boolean;

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
      this.shared.progressUp();
    },
  }

  constructor(
    private game: GamesCommonService,
    private shared: SharedDataService,
    private master: DungeonMasterService,
    ) { }

  ngOnInit(): void {
    this.life = this.master.mobs[this.mob].life;
    this.exit = false;
    this.disabled = false;
    this.builder = new ActionSlotBuilder();
    this.actions = this.master.mobs[this.mob].actions.map(a => this.builder.newActionSlot(a));
    this.drawables = this.actions.map(a => a);
  }

  adjustLife(arg0: number) {
    this.life = Math.max(0, this.life + arg0);
    if (this.life <= 0) {
      this.shared.exp(1);
      this.disabled = true;
    }
  }

  // clicks

  nextClick() {
    if (this.disabled) {
      return;
    }
    this.action = this.game.randomPop(this.drawables);
    this.action.available = false;
    this.brains[this.action.action]();
  }

  leftHandClick() {
    if (this.disabled) {
      return;
    }
    if (this.shared.hero.mana < 2) {
      return;
    }
    this.shared.mana(-2);
    ['staff', 'staff'].forEach(a => {
      this.actions.push(this.builder.newActionSlot(a));
    });
    this.drawables = this.actions.filter(a => a.available).map(a => a);
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

  slotsTransform(size: number) {
    let scale = 1.0 * this.maxrowsize / Math.max(this.maxrowsize, size);
    return `scale(${scale})`
  }

}

class ActionSlotBuilder {

  count = 0;

  newActionSlot(a: string): ActionSlot {
    return {action: a, index: this.count++, available: true};
  }

}

class ActionSlot {

  action: string;
  index: number;
  available: boolean;

}