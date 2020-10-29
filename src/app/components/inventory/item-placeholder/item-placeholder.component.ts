import { Component, Input, OnInit } from '@angular/core';
import { HeroItem } from 'src/app/models/hero.model';

@Component({
  selector: '[app-item-placeholder]',
  templateUrl: './item-placeholder.component.html',
  styleUrls: ['./item-placeholder.component.scss']
})
export class ItemPlaceholderComponent implements OnInit {

  @Input() item: HeroItem;

  constructor() { }

  ngOnInit(): void {
  }

}
