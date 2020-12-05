import { Injectable } from '@angular/core';
import { LandLocation } from '../models/land.model';

@Injectable({
  providedIn: 'root'
})
export class LandMapService {

  static _items: LandLocation[] = [];
  static registerItem(item: LandLocation) {
    this._items.push(item);
  }

  items: {[id: string]: LandLocation};

  constructor() {
    this.items = {};
    LandMapService._items.forEach(m => this.items[m.name] = m);
  }

}
