import { Component, Input, OnInit } from '@angular/core';
import { MageSpell } from 'src/app/models/hero.model';
import { SpellMasterService } from 'src/app/services/spell-master.service';

@Component({
  selector: 'app-spell-protect-poison',
  templateUrl: './spell-protect-poison.component.html',
  styleUrls: ['./spell-protect-poison.component.scss']
})
export class SpellProtectPoisonComponent implements OnInit {

  @Input() spell: MageSpell;

  constructor() { }

  ngOnInit(): void {
  }

}

SpellMasterService.registerSpell(
  {
    name: 'protectPoisonIm2v1',
    title: 'Protezione dal veleno I',
    mana: 2,
    effects: ['protectPoison1'],
    exp: 5,
    slot: 'protectPoisonI',
    traits: [],
    upgrades: ['protectPoisonIm1v1', 'protectPoisonIm2v2'],
    unlocks: ['protectPoisonIIm2v1'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'protectPoisonIm2v2',
    title: 'Protezione dal veleno I',
    mana: 2,
    effects: ['protectPoison1', 'protectPoison1'],
    exp: 5,
    slot: 'protectPoisonI',
    traits: [],
    upgrades: ['protectPoisonIm1v2'],
    unlocks: ['protectPoisonIIm2v1'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'protectPoisonIm1v1',
    title: 'Protezione dal veleno I',
    mana: 1,
    effects: ['protectPoison1'],
    exp: 5,
    slot: 'protectPoisonI',
    traits: [],
    upgrades: ['protectPoisonIm1v2'],
    unlocks: ['protectPoisonIIm2v1'],
  }
);
SpellMasterService.registerSpell(
  {
    name: 'protectPoisonIm1v2',
    title: 'Protezione dal veleno I',
    mana: 1,
    effects: ['protectPoison1', 'protectPoison1'],
    exp: 5,
    slot: 'protectPoisonI',
    traits: [],
    upgrades: [],
    unlocks: ['protectPoisonIIm2v1'],
  }
);

SpellMasterService.registerSpell(
  {
    name: 'protectPoisonIIm2v1',
    title: 'Protezione dal veleno II',
    mana: 2,
    effects: ['protectPoison1', 'protectPoison1'],
    exp: 5,
    slot: 'protectPoisonII',
    traits: [],
    upgrades: [],
    unlocks: [],
  }
);
