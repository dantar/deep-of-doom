import { Component, Input, OnInit } from '@angular/core';
import { HeroItem } from 'src/app/models/hero.model';
import { ItemsLoreService } from 'src/app/services/items-lore.service';

@Component({
  selector: '[app-item-mana-stone]',
  templateUrl: './item-mana-stone.component.html',
  styleUrls: ['./item-mana-stone.component.scss']
})
export class ItemManaStoneComponent implements OnInit {

  @Input() item: HeroItem;

  constructor() { }

  ngOnInit(): void {
  }

}

ItemsLoreService.registerItem({
  name: 'manaStone',
  title: 'Pietra arcana',
  traits: [],
  effects: ['healMana1'],
  spells: [], 
});
ItemsLoreService.registerItem({
  name: 'manaStoneEmpty',
  title: 'Pietra arcana consumata',
  traits: ['empty'],
  effects: [],
  spells: [],
});
