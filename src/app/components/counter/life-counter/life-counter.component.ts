import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-life-counter]',
  templateUrl: './life-counter.component.html',
  styleUrls: ['./life-counter.component.scss']
})
export class LifeCounterComponent implements OnInit {

  @Input() value: string;
  @Input() maxvalue: string;
  @Input() badvalue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
