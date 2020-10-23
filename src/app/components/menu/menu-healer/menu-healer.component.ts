import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-menu-healer]',
  templateUrl: './menu-healer.component.html',
  styleUrls: ['./menu-healer.component.scss']
})
export class MenuHealerComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();

  enabledHealWounds: boolean;

  constructor(
    public shared: SharedDataService,
  ) { }

  ngOnInit(): void {
    this.enabledHealWounds = this.shared.hero.life < this.shared.hero.maxlife || this.shared.hero.mana < this.shared.hero.maxmana || this.shared.hero.poison > 0;
  }

  healWounds() {
    if (this.enabledHealWounds) {
      this.shared.gold(-3);
      this.shared.hero.poison = 0;
      this.shared.hero.life = this.shared.hero.maxlife;
      this.shared.hero.mana = this.shared.hero.maxmana;
      this.enabledHealWounds = false;
    }
  }

  levelUpLife() {
    if (this.shared.hero.exp >= this.shared.hero.maxlife) {
      this.shared.levelUpLife();
    }
  }

  levelUpMana() {
    if (this.shared.hero.exp >= this.shared.hero.maxmana) {
      this.shared.levelUpMana();
    }
  }

  clickClose() {
    this.closeDialog.emit('close');
  }

}
