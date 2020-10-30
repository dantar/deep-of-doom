import { ThrowStmt } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpellSession, MageSpell } from 'src/app/models/hero.model';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { SharedDataService } from 'src/app/services/shared-data.service';
import { SpellMasterService } from 'src/app/services/spell-master.service';

@Component({
  selector: '[app-menu-spellbook]',
  templateUrl: './menu-spellbook.component.html',
  styleUrls: ['./menu-spellbook.component.scss']
})
export class MenuSpellbookComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();
  @Input() session: SpellSession;

  castables: CastableSpell[];

  constructor(private shared: SharedDataService,
    private audio: AudioPlayService,
    private spells: SpellMasterService) { }

  ngOnInit(): void {
    this.castables = this.shared.hero.spells
    .map(s => this.spells.spells[s])
    .map(s => new CastableSpell(s, this.shared.hero.mana >= s.mana))
    ;
    this.castables
    .filter(c => !this.session.enabled(c.spell))
    .forEach(c => c.enabled = false);
  }

  clickClose() {
    this.closeDialog.emit('close');
  }

  clickCastable(castable: CastableSpell) {
    this.audio.play('action');
    if (castable.enabled) this.triggerCastable(castable);
  }

  triggerCastable(castable: CastableSpell) {
    this.shared.mana(- castable.spell.mana);
    this.session.cast(castable.spell);
    castable.enabled = false;
    this.closeDialog.emit('close');
  }

}

class CastableSpell {
  enabled: boolean;
  spell: MageSpell;
  constructor(spell: MageSpell, enabled: boolean) {
    this.spell = spell;
    this.enabled = enabled;
  }
}