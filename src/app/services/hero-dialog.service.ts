import { Injectable } from '@angular/core';
import { HeroDialog } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroDialogService {

  static _items: HeroDialog[] = [];
  static registerItem(item: HeroDialog) {
    this._items.push(item);
  }

  items: {[id: string]: HeroDialog};

  constructor() {
    this.items = {};
    HeroDialogService._items.forEach(m => this.items[m.name] = m);
  }

}
