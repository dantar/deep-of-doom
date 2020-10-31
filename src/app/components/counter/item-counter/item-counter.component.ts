import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-item-counter]',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.scss']
})
export class ItemCounterComponent implements OnInit {

  @Input() value: string;
  @Input() maxvalue: string;

  constructor() { }

  ngOnInit(): void {
  }

}
