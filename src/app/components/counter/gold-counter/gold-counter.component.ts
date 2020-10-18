import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-gold-counter]',
  templateUrl: './gold-counter.component.html',
  styleUrls: ['./gold-counter.component.scss']
})
export class GoldCounterComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
