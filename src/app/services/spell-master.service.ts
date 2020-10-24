import { Injectable } from '@angular/core';
import { MageSpell } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class SpellMasterService {

  static _spells: MageSpell[] = [];
  static registerSpell(spell: MageSpell) {
    this._spells.push(spell);
  }

  spells: {[id: string]: MageSpell};

  constructor() {
    this.spells = {};
    SpellMasterService._spells.forEach(m => this.spells[m.name] = m);
  }

}

export class SpellSession {
  acceptedEffects: string[];
  exaustedSpells: string[];
  spellEffects: {[id:string]: ()=>void}
}
