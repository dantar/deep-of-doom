import { Component, Input, OnInit } from '@angular/core';
import { MageSpell } from 'src/app/models/hero.model';

@Component({
  selector: '[app-spell-placeholder]',
  templateUrl: './spell-placeholder.component.html',
  styleUrls: ['./spell-placeholder.component.scss']
})
export class SpellPlaceholderComponent implements OnInit {

  @Input() spell: MageSpell;

  constructor() { }

  ngOnInit(): void {
  }

}
