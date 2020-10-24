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
  }
);

SpellMasterService.registerSpell(
  {
    name: 'dartIIm2d1',
    title: 'Dardo incantato',
    mana: 2,
    effects: ['strikeMob'],
  }
);