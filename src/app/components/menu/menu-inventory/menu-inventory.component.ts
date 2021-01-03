import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroEquipment, HeroItem, ItemSession } from 'src/app/models/hero.model';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { GuiCommonsService } from 'src/app/services/gui-commons.service';
import { ItemsLoreService } from 'src/app/services/items-lore.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-menu-inventory]',
  templateUrl: './menu-inventory.component.html',
  styleUrls: ['./menu-inventory.component.scss']
})
export class MenuInventoryComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();
  trigger: string;

  constructor(
    public gui: GuiCommonsService,
    private audio: AudioPlayService,
    private shared: SharedDataService,
    private items: ItemsLoreService,
  ) { }

  inventory: InventoryItem[];
  
  ngOnInit(): void {
    this.trigger = this.shared.fight ? 'fight': this.shared.hero.location === 'maze' ? 'maze' : 'map';
    this.initInventory();
  }
  private initInventory() {
    this.inventory = this.shared.hero.inventory
    .map(i => {
      let item = this.items.items[i.name];
      return new InventoryItem(i, item, item.triggers && item.triggers[this.trigger] && item.triggers[this.trigger].check(this.shared, i));
    });
  }

  clickClose() {
    this.audio.play('action');
    this.closeDialog.emit('close');
  }

  clickItem(item: InventoryItem) {
    this.audio.play('action');
    let t = item.item.triggers[this.trigger];
    if (t && t.check(this.shared, item.equipment)) {
      t.fire(this.shared, item.equipment);
    }
    this.initInventory();
  }

}

class InventoryItem {

  equipment: HeroEquipment;
  item: HeroItem;
  enabled: boolean;

  constructor(equipment: HeroEquipment, item: HeroItem, enabled: boolean) {
    this.equipment = equipment;
    this.item = item;
    this.enabled = enabled;
  }

}