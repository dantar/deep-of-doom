import { Component, Input, OnInit } from '@angular/core';
import { HeroItem } from 'src/app/models/hero.model';
import { ItemsLoreService } from 'src/app/services/items-lore.service';

@Component({
  selector: '[app-item-healing-stone]',
  templateUrl: './item-healing-stone.component.html',
  styleUrls: ['./item-healing-stone.component.scss']
})
export class ItemHealingStoneComponent implements OnInit {

  @Input() item: HeroItem;

  constructor() { }

  ngOnInit(): void {
  }

}

ItemsLoreService.registerItem({
  name: 'healingStone',
  title: 'Pietra curativa',
  traits: [],
  effects: ['healLife1'],
  spells: [],
});
ItemsLoreService.registerItem({
  name: 'healingStoneEmpty',
  title: 'Pietra curativa consumata',
  traits: ['empty'],
  effects: [],
  spells: [],
});
