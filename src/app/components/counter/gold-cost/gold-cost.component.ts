import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-gold-cost]',
  templateUrl: './gold-cost.component.html',
  styleUrls: ['./gold-cost.component.scss']
})
export class GoldCostComponent implements OnInit {

  @Input() cost: number;

  constructor() { }

  ngOnInit(): void {
  }

}
