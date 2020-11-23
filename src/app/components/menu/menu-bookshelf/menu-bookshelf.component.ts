import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MageSpell } from 'src/app/models/hero.model';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { GuiCommonsService } from 'src/app/services/gui-commons.service';
import { ItemsLoreService } from 'src/app/services/items-lore.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { SpellMasterService } from 'src/app/services/spell-master.service';

@Component({
  selector: '[app-menu-bookshelf]',
  templateUrl: './menu-bookshelf.component.html',
  styleUrls: ['./menu-bookshelf.component.scss']
})
export class MenuBookshelfComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();

  constructor(
    public gui: GuiCommonsService,
    private shared: SharedDataService,
    private spells: SpellMasterService,
    private audio: AudioPlayService,
    private items: ItemsLoreService,
    ) { }

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
    let herospells = this.shared.hero.spells.map(s => this.spells.spells[s]);
    herospells.forEach(spell => {
      result.push(...spell.upgrades
        .map(s => new SpellBook(this.spells.spells[s], this.shared.hero.exp))
      );
      result.push(...spell.unlocks
        .filter(s => !herospells.map(s => s.slot).includes(this.spells.spells[s].slot))
        .map(s => new SpellBook(this.spells.spells[s], this.shared.hero.exp))
      );
    });
    return result;
  }

  clickBook(book: SpellBook) {
    this.audio.play('action');
    this.shared.hero.spells = this.shared.hero.spells
    .filter(s => this.spells.spells[s].slot != book.spell.slot);
    this.shared.hero.spells.push(book.spell.name);
    this.shared.exp(- book.spell.exp);
    this.shared.save();
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