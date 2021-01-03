import { Component, Input, OnInit } from '@angular/core';
import { HeroEquipment, HeroEquipmentCountable, HeroItem } from 'src/app/models/hero.model';
import { ItemsLoreService } from 'src/app/services/items-lore.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-item-healing-stone]',
  templateUrl: './item-healing-stone.component.html',
  styleUrls: ['./item-healing-stone.component.scss']
})
export class ItemHealingStoneComponent implements OnInit {

  @Input() item: HeroEquipment;
  stats: HeroItem;

  constructor(private items: ItemsLoreService) { 
  }
  
  ngOnInit(): void {
    this.stats = this.items.items[this.item.name]; 
  }

}

ItemsLoreService.registerItem({
  name: 'healingStone',
  title: 'Pietra curativa',
  traits: [],
  triggers: {
    map: {
      check: (shared: SharedDataService, e: HeroEquipment) => (e as HeroEquipmentCountable).count ? true : false,
      fire: (shared: SharedDataService, e: HeroEquipment) => {
        shared.life(1);
        HeroItem.loseCountable(shared, e as HeroEquipmentCountable, 1);
      },
    },
  }
});
