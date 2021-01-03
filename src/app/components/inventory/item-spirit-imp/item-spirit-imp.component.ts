import { Component, Input, OnInit } from '@angular/core';
import { HeroEquipment, HeroItem } from 'src/app/models/hero.model';
import { ItemsLoreService } from 'src/app/services/items-lore.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-item-spirit-imp]',
  templateUrl: './item-spirit-imp.component.html',
  styleUrls: ['./item-spirit-imp.component.scss']
})
export class ItemSpiritImpComponent implements OnInit {

  @Input() item: HeroEquipmentSpiritImp;

  constructor() { }

  ngOnInit(): void {
  }

  cssFor(c: string): {[property:string]: string} {
    return {};
    // return {'fill':'#ff0000'};
  }

}

class HeroEquipmentSpiritImp extends HeroEquipment {

  wings: boolean;

}

ItemsLoreService.registerItem({
  name: 'spiritImp',
  title: 'Spirito IMP',
  traits: [],
  factory: (shared: SharedDataService) => {
    return {
      name:'spiritImp', 
      wings: true,
    } as HeroEquipmentSpiritImp
  },
  triggers: {},
});
