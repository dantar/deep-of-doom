import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-mana-counter]',
  templateUrl: './mana-counter.component.html',
  styleUrls: ['./mana-counter.component.scss']
})
export class ManaCounterComponent implements OnInit {

  constructor() { }

  @Input() value: string;
  @Input() maxvalue: string;
  @Input() badvalue: string;

  ngOnInit(): void {
  }

}
