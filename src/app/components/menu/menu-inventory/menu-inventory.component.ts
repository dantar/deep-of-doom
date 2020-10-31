import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroItem, ItemSession } from 'src/app/models/hero.model';
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

  @Input() session: ItemSession;
  @Output() closeDialog = new EventEmitter<string>();

  constructor(
    public gui: GuiCommonsService,
    private audio: AudioPlayService,
    private shared: SharedDataService,
    private items: ItemsLoreService,
    ) { }

  inventory: InventoryItem[];
  itemsByName: {[id:string]: InventoryItem};

  ngOnInit(): void {
    this.inventory = [];
    this.itemsByName = {};
    this.shared.hero.inventory
    .map(i => this.items.items[i])
    .forEach(item => {if (this.itemsByName[item.name]) {
      this.itemsByName[item.name].count += 1;
    } else {
      this.itemsByName[item.name] = new InventoryItem(item, this.session.enabled(item));
      this.inventory.push(this.itemsByName[item.name]);
    }}) ;
  }

  clickClose() {
    this.audio.play('action');
    this.closeDialog.emit('close');
  }

  clickItem(item: InventoryItem) {
    this.audio.play('action');
    this.session.use(item.item);
    this.ngOnInit();
  }

}

class InventoryItem {

  item: HeroItem;
  enabled: boolean;
  count: number;

  constructor(item: HeroItem, enabled: boolean) {
    this.item = item;
    this.enabled = enabled;
    this.count = 1;
  }
}