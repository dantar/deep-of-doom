import { Component, Input, OnInit } from '@angular/core';
import { MageSpell } from 'src/app/models/hero.model';
import { SpellMasterService } from 'src/app/services/spell-master.service';

@Component({
  selector: '[app-spell-dart]',
  templateUrl: './spell-dart.component.html',
  styleUrls: ['./spell-dart.component.scss']
})
export class SpellDartComponent implements OnInit {

  @Input() spell: MageSpell;

  constructor() { }

  ngOnInit(): void {
  }

}

SpellMasterService.registerSpell(
  {
    name: 'dartIm1d1',
    title: 'Dardo incantato I',
    mana: 1,
    effects: ['strikeMob'],
    exp: 0,
    slot: 'dartI',
    traits: [],
    upgrades: ['dartIm1d2'],
    unlocks: ['dartIIm2d1'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIm1d2',
    title: 'Dardo incantato I, forza 2',
    mana: 1,
    effects: ['strikeMob2'],
    exp: 10,
    slot: 'dartI',
    traits: ['addAura'],
    upgrades: [],
    unlocks: ['dartIIm2d1'],
  }
);

SpellMasterService.registerSpell(
  {
    name: 'dartIIm2d1',
    title: 'Dardo incantato II',
    mana: 2,
    effects: ['strikeMob'],
    exp: 10,
    slot: 'dartII',
    traits: ['addDartTwo'],
    upgrades: ['dartIIm1d1', 'dartIIm2d2'],
    unlocks: ['dartIIIm3d1'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIm1d1',
    title: 'Dardo incantato II',
    mana: 1,
    effects: ['strikeMob'],
    exp: 10,
    slot: 'dartII',
    traits: ['addDartTwo'],
    upgrades: ['dartIIm1d2'],
    unlocks: ['dartIIIm3d1'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIm2d2',
    title: 'Dardo incantato II, forza 2',
    mana: 2,
    effects: ['strikeMob2'],
    exp: 10,
    slot: 'dartII',
    traits: ['addDartTwo', 'addAura'],
    upgrades: [],
    unlocks: ['dartIIIm3d1'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIm1d2',
    title: 'Dardo incantato II, forza 2',
    mana: 1,
    effects: ['strikeMob2'],
    exp: 10,
    slot: 'dartII',
    traits: ['addDartTwo', 'addAura'],
    upgrades: [],
    unlocks: ['dartIIIm3d1'],
  }
);

SpellMasterService.registerSpell(
  {
    name: 'dartIIIm3d1',
    title: 'Dardo incantato III',
    mana: 3,
    effects: ['strikeMob'],
    exp: 10,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree'],
    upgrades: ['dartIIIm2d1', 'dartIIIm3d2'],
    unlocks: [],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm2d1',
    title: 'Dardo incantato III',
    mana: 2,
    effects: ['strikeMob'],
    exp: 10,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree'],
    upgrades: ['dartIIIm1d1', 'dartIIIm2d2'],
    unlocks: [],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm1d1',
    title: 'Dardo incantato III',
    mana: 1,
    effects: ['strikeMob'],
    exp: 10,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree'],
    upgrades: ['dartIIIm1d2'],
    unlocks: [],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm3d2',
    title: 'Dardo incantato III, forza 2',
    mana: 3,
    effects: ['strikeMob2'],
    exp: 15,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree', 'addAura'],
    upgrades: ['dartIIIm2d2'],
    unlocks: [],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm2d2',
    title: 'Dardo incantato III, forza 2',
    mana: 2,
    effects: ['strikeMob2'],
    exp: 15,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree', 'addAura'],
    upgrades: ['dartIIIm1d2'],
    unlocks: [],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm1d2',
    title: 'Dardo incantato III, forza 2',
    mana: 1,
    effects: ['strikeMob2'],
    exp: 15,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree', 'addAura'],
    upgrades: [],
    unlocks: [],
  }
);