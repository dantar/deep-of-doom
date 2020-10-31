import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-item-stack]',
  templateUrl: './item-stack.component.html',
  styleUrls: ['./item-stack.component.scss']
})
export class ItemStackComponent implements OnInit {

  @Input() count: number;

  constructor() { }

  ngOnInit(): void {
  }

}
