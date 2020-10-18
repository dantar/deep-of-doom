import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-exp-counter]',
  templateUrl: './exp-counter.component.html',
  styleUrls: ['./exp-counter.component.scss']
})
export class ExpCounterComponent implements OnInit {

  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
