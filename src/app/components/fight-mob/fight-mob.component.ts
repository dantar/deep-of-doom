import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GamesCommonService } from 'src/app/services/games-common.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-fight-mob',
  templateUrl: './fight-mob.component.html',
  styleUrls: ['./fight-mob.component.scss']
})
export class FightMobComponent implements OnInit {

  @Input() mob: string;
  @Output() done = new EventEmitter();
  actions: string[];
  action: string;
  life: number;

  brains: {[id:string]: () => void} = {
    tough: () => {
      this.adjustLife(-1);
    },
    hit: () => {
      this.shared.life(-1);
    },
    gold: () => {
      this.shared.gold(1);
    },
    staff: () => {
      this.adjustLife(-1);
    },
  }

  constructor(
    private game: GamesCommonService,
    private shared: SharedDataService,
    ) { }

  ngOnInit(): void {
    this.life = 2;
    this.actions = ['tough', 'tough', 'hit', 'hit', 'gold'];
  }

  adjustLife(arg0: number) {
    this.life = Math.max(0, this.life + arg0);
    if (this.life <= 0) {
      this.shared.exp(1);
    }
  }

  // clicks

  nextClick() {
    if (this.life === 0) {
      this.done.emit();
      return;
    }
    this.action = this.game.randomPop(this.actions);
    this.brains[this.action]();
  }

  leftHandClick() {
    if (this.life === 0) {
      this.done.emit();
      return;
    }
    if (this.shared.hero.mana < 2) {
      return;
    }
    this.shared.mana(-2);
    this.actions.push('staff', 'staff');
  }

}
