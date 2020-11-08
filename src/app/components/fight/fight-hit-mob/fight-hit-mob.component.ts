import { Component, Input, OnInit } from '@angular/core';
import { FightActionsService } from 'src/app/services/fight-actions.service';

@Component({
  selector: '[app-fight-hit-mob]',
  templateUrl: './fight-hit-mob.component.html',
  styleUrls: ['./fight-hit-mob.component.scss']
})
export class FightHitMobComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}

FightActionsService.registerItem({
  name: 'fight',
  description: ['Se scatta questa azione, l\'avversario subisce un colpo e perde 1 vita.']
});
FightActionsService.registerItem({
  name: 'fight2',
  description: ['Se scatta questa azione, l\'avversario subisce un colpo e perde 2 vite.']
});