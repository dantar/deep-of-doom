import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-exp-cost]',
  templateUrl: './exp-cost.component.html',
  styleUrls: ['./exp-cost.component.scss']
})
export class ExpCostComponent implements OnInit {

  @Input() cost: number;

  constructor() { }

  ngOnInit(): void {
  }

}
