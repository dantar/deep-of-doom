import { Component, Input, OnInit } from '@angular/core';
import { FightAction } from 'src/app/models/fight.model';

@Component({
  selector: '[app-action-placeholder]',
  templateUrl: './action-placeholder.component.html',
  styleUrls: ['./action-placeholder.component.scss']
})
export class ActionPlaceholderComponent implements OnInit {

  @Input() action: FightAction;

  constructor() { }

  ngOnInit(): void {
  }

}
