import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-mana-cost]',
  templateUrl: './mana-cost.component.html',
  styleUrls: ['./mana-cost.component.scss']
})
export class ManaCostComponent implements OnInit {

  @Input() cost: number;

  constructor() { }

  ngOnInit(): void {
  }

}
