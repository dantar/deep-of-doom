import { Injectable } from '@angular/core';
import { HeroItem } from '../models/hero.model';
import { SharedDataService } from './shared-data.service';

@Injectable({
  providedIn: 'root'
})
export class ItemsLoreService {

  static _items: HeroItem[] = [];
  static registerItem(item: HeroItem) {
    this._items.push(item);
  }

  items: {[id: string]: HeroItem};

  constructor(private shared: SharedDataService) {
    this.items = {};
    ItemsLoreService._items.forEach(m => this.items[m.name] = m);
  }

}
