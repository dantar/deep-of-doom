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
    unlocks: ['dartIm1d2', 'dartIIm2d1'],
    exp: 0,
    slot: 'dartI',
    traits: [],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIm1d2',
    title: 'Dardo incantato I, forza 2',
    mana: 1,
    effects: ['strikeMob2'],
    unlocks: ['dartIIm2d1'],
    exp: 12,
    slot: 'dartI',
    traits: ['addAura'],
  }
);

SpellMasterService.registerSpell(
  {
    name: 'dartIIm2d1',
    title: 'Dardo incantato II',
    mana: 2,
    effects: ['strikeMob'],
    unlocks: ['dartIIm1d1', 'dartIIIm3d1'],
    exp: 4,
    slot: 'dartII',
    traits: ['addDartTwo'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIm1d1',
    title: 'Dardo incantato II',
    mana: 1,
    effects: ['strikeMob'],
    unlocks: ['dartIIm1d2', 'dartIIIm3d1'],
    exp: 8,
    slot: 'dartII',
    traits: ['addDartTwo'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIm1d2',
    title: 'Dardo incantato II, forza 2',
    mana: 1,
    effects: ['strikeMob2'],
    unlocks: ['dartIIIm3d1'],
    exp: 15,
    slot: 'dartII',
    traits: ['addDartTwo', 'addAura'],
  }
);

SpellMasterService.registerSpell(
  {
    name: 'dartIIIm3d1',
    title: 'Dardo incantato III',
    mana: 3,
    effects: ['strikeMob'],
    unlocks: ['dartIIIm2d1', 'dartIIIm3d2'],
    exp: 4,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm2d1',
    title: 'Dardo incantato III',
    mana: 2,
    effects: ['strikeMob'],
    unlocks: ['dartIIIm1d1', 'dartIIIm2d2'],
    exp: 8,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm1d1',
    title: 'Dardo incantato III',
    mana: 1,
    effects: ['strikeMob'],
    unlocks: ['dartIIIm1d2'],
    exp: 8,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm3d2',
    title: 'Dardo incantato III, forza 2',
    mana: 3,
    effects: ['strikeMob2'],
    unlocks: ['dartIIIm2d2'],
    exp: 15,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree', 'addAura'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm2d2',
    title: 'Dardo incantato III, forza 2',
    mana: 2,
    effects: ['strikeMob2'],
    unlocks: ['dartIIIm1d2'],
    exp: 15,
    slot: 'dartIII',
    traits: ['addDartTwo', 'addDartThree', 'addAura'],
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
  }
);