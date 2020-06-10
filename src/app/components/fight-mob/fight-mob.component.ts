import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GamesCommonService } from 'src/app/services/games-common.service';

@Component({
  selector: 'app-fight-mob',
  templateUrl: './fight-mob.component.html',
  styleUrls: ['./fight-mob.component.scss']
})
export class FightMobComponent implements OnInit {

  @Input() mob: string;
  @Output() done = new EventEmitter();
  actions: string[];
  hits: number;

  brains: {[id:string]: () => void} = {
    hit: () => {
      this.hits --;
      if (this.hits <= 0) {
        this.done.emit();
      }
    },
    dodge: () => {
    },
    gold: () => {
    },
  }

  constructor(private game: GamesCommonService) { }

  ngOnInit(): void {
    this.hits = 2;
    this.actions = ['dodge', 'dodge', 'hit', 'hit', 'gold'];
    this.game.shuffle(this.actions);
  }

  nextClick() {
    this.brains[this.actions.pop()]();
  }

}
