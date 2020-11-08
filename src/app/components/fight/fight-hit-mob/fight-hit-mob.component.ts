import { Component, Input, OnInit } from '@angular/core';

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
