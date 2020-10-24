import { Component, OnInit } from '@angular/core';
import { SpellMasterService } from 'src/app/services/spell-master.service';

@Component({
  selector: '[app-spell-dart]',
  templateUrl: './spell-dart.component.html',
  styleUrls: ['./spell-dart.component.scss']
})
export class SpellDartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

SpellMasterService.registerSpell(
  {
    name: 'dartIm1d1',
    title: 'Dardo incantato',
    mana: 1,
    effects: ['strikeMob'],
    unlocks: ['dartIm1d2', 'dartIIm2d1'],
    exp: 0,
    slot: 'dartI',
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIm1d2',
    title: 'Dardo incantato',
    mana: 1,
    effects: ['strikeMob2'],
    exp: 12,
    slot: 'dartI',
  }
);

SpellMasterService.registerSpell(
  {
    name: 'dartIIm2d1',
    title: 'Dardo incantato',
    mana: 2,
    effects: ['strikeMob'],
    unlocks: ['dartIIm1d1', 'dartIIIm3d1'],
    exp: 4,
    slot: 'dartII',
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIm1d1',
    title: 'Dardo incantato',
    mana: 1,
    effects: ['strikeMob'],
    unlocks: ['dartIIm1d2'],
    exp: 8,
    slot: 'dartII',
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIm1d2',
    title: 'Dardo incantato',
    mana: 1,
    effects: ['strikeMob2'],
    exp: 15,
    slot: 'dartII',
  }
);

SpellMasterService.registerSpell(
  {
    name: 'dartIIIm3d1',
    title: 'Dardo incantato',
    mana: 3,
    effects: ['strikeMob'],
    unlocks: ['dartIIIm2d1', 'dartIIIm3d2'],
    exp: 4,
    slot: 'dartIII',
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm2d1',
    title: 'Dardo incantato',
    mana: 2,
    effects: ['strikeMob'],
    unlocks: ['dartIIIm1d1', 'dartIIIm2d2'],
    exp: 8,
    slot: 'dartIII',
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm1d1',
    title: 'Dardo incantato',
    mana: 1,
    effects: ['strikeMob'],
    unlocks: ['dartIIIm1d2'],
    exp: 8,
    slot: 'dartIII',
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm3d2',
    title: 'Dardo incantato',
    mana: 3,
    effects: ['strikeMob2'],
    unlocks: ['dartIIIm2d2'],
    exp: 15,
    slot: 'dartIII',
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm2d2',
    title: 'Dardo incantato',
    mana: 2,
    effects: ['strikeMob2'],
    unlocks: ['dartIIIm1d2'],
    exp: 15,
    slot: 'dartIII',
  }
);
SpellMasterService.registerSpell(
  {
    name: 'dartIIIm1d2',
    title: 'Dardo incantato',
    mana: 1,
    effects: ['strikeMob2'],
    exp: 15,
    slot: 'dartIII',
  }
);