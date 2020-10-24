import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MageSpell } from 'src/app/models/hero.model';
import { SpellMasterService } from 'src/app/services/spell-master.service';

@Component({
  selector: '[app-menu-bookshelf]',
  templateUrl: './menu-bookshelf.component.html',
  styleUrls: ['./menu-bookshelf.component.scss']
})
export class MenuBookshelfComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();

  constructor(private spells: SpellMasterService) { }

  bookshelf: SpellBook[]

  ngOnInit(): void {
    this.bookshelf = [
      {name: 'dart2', spell: this.spells.spells['dartIIm2d1'], enabled: true, exp: 5}
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