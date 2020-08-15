import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fallInAppear } from '../animations';

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


  mobactions: {[id: string]: string[]} = {
    skeleton: ['tough', 'tough', 'hit', 'hit', 'gold'],
    chest: ['gold', 'gold', 'gold', 'tough', 'tough'],
    exit: ['gold', 'gold', 'exit'],
  };

  brains: {[id:string]: () => void} = {
    tough: () => {
      this.adjustLife(-1);
    },
    hit: () => {
      this.shared.life(-1);
      this.disabled = (this.shared.hero.life === 0);
    },
    gold: () => {
      this.shared.gold(1);
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
    ) { }

  ngOnInit(): void {
    this.life = 2;
    this.exit = false;
    this.disabled = false;
    this.builder = new ActionSlotBuilder();
    this.actions =  this.mobactions[this.mob].map(a => this.builder.newActionSlot(a));
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
    return i * 20;
  }

  attrY(i: number, size: number) {
    return 5;
  }

  slotsTransform(size: number) {
    let maxrowsize = 10;
    let scale = 1.0 * maxrowsize / Math.max(maxrowsize, size);
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