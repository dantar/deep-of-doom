import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MageSpell } from 'src/app/models/hero.model';

@Component({
  selector: '[app-menu-bookshelf]',
  templateUrl: './menu-bookshelf.component.html',
  styleUrls: ['./menu-bookshelf.component.scss']
})
export class MenuBookshelfComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();

  constructor() { }

  bookshelf: SpellBook[]

  ngOnInit(): void {
    this.bookshelf = [
      {name: 'dart', spell: {name: 'dart', title: 'dardo incantato'}, enabled: true, exp: 5}
    ];
  }

  clickBook(book: SpellBook) {
    console.log(book);
  }

  clickClose() {
    this.closeDialog.emit('close');
  }

}

class SpellBook {
  name: string;
  spell: MageSpell;
  enabled: boolean;
  exp: number;
}