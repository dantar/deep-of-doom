import { Component, Input, OnInit } from '@angular/core';
import { HeroEquipment, HeroEquipmentCountable, HeroItem, HeroRewardItem } from 'src/app/models/hero.model';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';
import { FightActionsService } from 'src/app/services/fight-actions.service';
import { ItemsLoreService } from 'src/app/services/items-lore.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-item-crystal]',
  templateUrl: './item-crystal.component.html',
  styleUrls: ['./item-crystal.component.scss']
})
export class ItemCrystalComponent implements OnInit {

  @Input() item: HeroEquipment;

  constructor() { }

  ngOnInit(): void {
  }

}

let crystalItem: HeroItem = {
  name: 'crystal',
  title: 'Cristallo di Kyr',
  traits: [],
  gain: HeroItem.gainCountable,
  lose: HeroItem.loseCountable,
  factory: (shared: SharedDataService) => {return {name:'crystal', count: 1}},
  triggers: {},
};

ItemsLoreService.registerItem(crystalItem);

DungeonMasterService.registerMob(
  {
    name: 'crystal',
    keywords: ['treasure', 'low'],
    actions: ['search', 'crystal', 'crystal', 'replaceWithShadow'],
    life: 1,
    challenge: 'search',
    exp: 0,
    blocks: false,
    component: ItemCrystalComponent,
    tags: {},
    done: 'win',
  },
);

FightActionsService.registerItem({
  name: 'crystal',
  description: ['Se attivata, trovi un cristallo di Kyr'],
  effect: (shared: SharedDataService) => {
    shared.reward(new HeroRewardItem({name:'crystal', count: 1} as HeroEquipmentCountable));
  },
  value: 1,
});


