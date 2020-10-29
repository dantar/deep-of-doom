import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HeroItem } from 'src/app/models/hero.model';
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
  @Output() activateItem = new EventEmitter<string>();

  constructor(
    public gui: GuiCommonsService,
    private audio: AudioPlayService,
    private shared: SharedDataService,
    private items: ItemsLoreService,
    ) { }

  inventory: InventoryItem[];

  ngOnInit(): void {
    this.inventory = this.shared.hero.inventory
    .map(i => this.items.items[i])
    .map(item => new InventoryItem(item, true))
    ;
  }

  clickClose() {
    this.audio.play('action');
    this.closeDialog.emit('close');
  }

  clickFlee() {
    this.audio.play('action');
    this.activateItem.emit('flee');
  }

  clickItem(item: InventoryItem) {
    this.audio.play('action');
    this.activateItem.emit(item.item.name);
  }

}


class InventoryItem {

  item: HeroItem;
  enabled: boolean;

  constructor(item: HeroItem, enabled: boolean) {
    this.item = item;
    this.enabled = enabled;
  }
}