import { Component, Input, OnInit } from '@angular/core';
import { HeroEquipment } from 'src/app/models/hero.model';

@Component({
  selector: '[app-item-placeholder]',
  templateUrl: './item-placeholder.component.html',
  styleUrls: ['./item-placeholder.component.scss']
})
export class ItemPlaceholderComponent implements OnInit {

  @Input() item: HeroEquipment;

  constructor() { }

  ngOnInit(): void {
  }

}
