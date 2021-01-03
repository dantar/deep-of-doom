import { Component, Input, OnInit } from '@angular/core';
import { HeroEquipment, HeroEquipmentCountable, HeroItem } from 'src/app/models/hero.model';
import { ItemsLoreService } from 'src/app/services/items-lore.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-item-mana-stone]',
  templateUrl: './item-mana-stone.component.html',
  styleUrls: ['./item-mana-stone.component.scss']
})
export class ItemManaStoneComponent implements OnInit {

  @Input() item: HeroEquipment;

  constructor() { }

  ngOnInit(): void {
  }

}

ItemsLoreService.registerItem({
  name: 'manaStone',
  title: 'Pietra arcana',
  traits: [],
  triggers: {
    map: {
      check: (shared: SharedDataService, e: HeroEquipment) => (e as HeroEquipmentCountable).count ? true : false,
      fire: (shared: SharedDataService, e: HeroEquipment) => {
        shared.mana(1);
        HeroItem.loseCountable(shared, e as HeroEquipmentCountable, 1);
      },
    },
  },
});
