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
      this.life --;
      if (this.life <= 0) {
        this.done.emit();
      }
    },
    hit: () => {
      this.shared.life(-1);
    },
    gold: () => {
      this.shared.gold(1);
    },
  }

  constructor(
    private game: GamesCommonService,
    private shared: SharedDataService,
    ) { }

  ngOnInit(): void {
    this.life = 2;
    this.actions = ['tough', 'tough', 'hit', 'hit', 'gold'];
    this.game.shuffle(this.actions);
  }

  nextClick() {
    this.action = this.actions.pop();
    this.brains[this.action]();
  }

}
