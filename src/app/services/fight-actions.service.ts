import { Injectable } from '@angular/core';
import { FightAction } from '../models/fight.model';

@Injectable({
  providedIn: 'root'
})
export class FightActionsService {

  static _items: FightAction[] = [];
  static registerItem(item: FightAction) {
    this._items.push(item);
  }

  actions: {[id: string]: FightAction};

  constructor() {
    this.actions = {};
    FightActionsService._items.forEach(m => this.actions[m.name] = m);
  }

}
