import { Component, Input, OnInit } from '@angular/core';
import { HeroEquipment, HeroItem } from 'src/app/models/hero.model';
import { ItemsLoreService } from 'src/app/services/items-lore.service';

@Component({
  selector: '[app-item-protect-poison-stone]',
  templateUrl: './item-protect-poison-stone.component.html',
  styleUrls: ['./item-protect-poison-stone.component.scss']
})
export class ItemProtectPoisonStoneComponent implements OnInit {
  
  @Input() item: HeroEquipment;

  constructor() { }

  ngOnInit(): void {
  }

}

ItemsLoreService.registerItem({
  name: 'protectPoisonStone',
  title: 'Pietra annulla veleno',
  traits: [],
  triggers: {
    // protect from poison (was protectPoison1)
  },
});
