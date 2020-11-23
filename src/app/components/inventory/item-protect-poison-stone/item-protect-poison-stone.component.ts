import { Component, Input, OnInit } from '@angular/core';
import { HeroItem } from 'src/app/models/hero.model';
import { ItemsLoreService } from 'src/app/services/items-lore.service';

@Component({
  selector: '[app-item-protect-poison-stone]',
  templateUrl: './item-protect-poison-stone.component.html',
  styleUrls: ['./item-protect-poison-stone.component.scss']
})
export class ItemProtectPoisonStoneComponent implements OnInit {
  
  @Input() item: HeroItem;

  constructor() { }

  ngOnInit(): void {
  }

}

ItemsLoreService.registerItem({
  name: 'protectPoisonStone',
  title: 'Pietra annulla veleno',
  traits: [],
  effects: ['protectPoison1'],
  spells: ['protectPoisonIm2v1'],
});
ItemsLoreService.registerItem({
  name: 'protectPoisonStoneEmpty',
  title: 'Pietra annulla veleno consumata',
  traits: ['empty'],
  effects: [],
  spells: ['protectPoisonIm2v1'],
});