import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MageSpell } from 'src/app/models/hero.model';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { SpellMasterService } from 'src/app/services/spell-master.service';

@Component({
  selector: '[app-menu-bookshelf]',
  templateUrl: './menu-bookshelf.component.html',
  styleUrls: ['./menu-bookshelf.component.scss']
})
export class MenuBookshelfComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();

  constructor(private shared: SharedDataService,
    private spells: SpellMasterService) { }

  bookshelf: SpellBook[]

  ngOnInit(): void {
    if (!this.shared.hero.bookshelf) {
      this.initHeroBookShelf();
    }
    this.bookshelf = this.shared.hero.bookshelf.map(s => new SpellBook(this.spells.spells[s], this.shared.hero.exp));
  }

  initHeroBookShelf() {
    this.shared.hero.bookshelf = [];
    this.shared.hero.spells.forEach(s => {
      if (this.spells.spells[s].unlocks) {
        this.shared.hero.bookshelf.push(...this.spells.spells[s].unlocks.filter(s => !this.shared.hero.spells.includes(s)));
      }
    });
  }

  clickBook(book: SpellBook) {
    console.log(book);
  }

  clickClose() {
    this.closeDialog.emit('close');
  }

}

class SpellBook {
  spell: MageSpell;

  enabled: boolean;
  constructor(spell: MageSpell, currentExp) {
    this.spell = spell;
    this.enabled = currentExp >= spell.exp;
  }

}