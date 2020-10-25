import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MageSpell } from 'src/app/models/hero.model';
import { AudioPlayService } from 'src/app/services/audio-play.service';
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
    private spells: SpellMasterService,
    private audio: AudioPlayService) { }

  bookshelf: SpellBook[]

  ngOnInit(): void {
    this.bookshelf = this.heroSpellsUnlockList();
    this.bookshelf.push(...this.heroBookshelfList());
  }
  heroBookshelfList(): SpellBook[] {
    return this.shared.hero.bookshelf.map(s => new SpellBook(this.spells.spells[s], this.shared.hero.exp));
  }

  heroSpellsUnlockList(): SpellBook[] {
    let result: SpellBook[] = [];
    this.shared.hero.spells.forEach(s => {
      if (this.spells.spells[s].unlocks) {
        result.push(...this.spells.spells[s].unlocks
          .filter(s => !this.shared.hero.spells.includes(s))
          .map(s => new SpellBook(this.spells.spells[s], this.shared.hero.exp))
        );
      }
    });
    return result;
  }

  clickBook(book: SpellBook) {
    this.audio.play('action');
    this.shared.hero.spells.push(book.spell.name);
    this.shared.exp(- book.spell.exp);
    this.ngOnInit();
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