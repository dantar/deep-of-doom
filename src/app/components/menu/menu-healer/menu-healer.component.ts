import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AudioPlayService } from 'src/app/services/audio-play.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-menu-healer]',
  templateUrl: './menu-healer.component.html',
  styleUrls: ['./menu-healer.component.scss']
})
export class MenuHealerComponent implements OnInit {

  @Output() closeDialog = new EventEmitter<string>();

  items: NpcShopItem[];

  constructor(
    public shared: SharedDataService,
    private audio: AudioPlayService,
  ) { }

  ngOnInit(): void {
    this.items = [];
    this.items.push({
      name: 'heal',
      effect: () => {
        this.shared.gold(-3);
        this.shared.hero.poison = 0;
        this.shared.hero.life = this.shared.hero.maxlife;
        this.shared.hero.mana = this.shared.hero.maxmana;
        this.shared.save();
      },
      title: 'Cura le ferite',
      currency: 'gold',
      cost: 3,
      discount: Math.max(0, 3 - this.shared.hero.gold),
      enabled: this.shared.hero.life < this.shared.hero.maxlife || this.shared.hero.mana < this.shared.hero.maxmana || this.shared.hero.poison > 0,
    });
    this.items.push({
      name: 'levelUpLife',
      effect: ()=> {
        this.shared.levelUpLife();
        this.shared.save();
      },
      title: 'Aumenta la vita massima',
      currency: 'exp',
      cost: this.shared.hero.maxlife,
      discount: 0,
      enabled: this.checkExperienceCost(this.shared.hero.maxlife, 0),
    });
    this.items.push({
      name: 'levelUpMana',
      effect: ()=> {
        this.shared.levelUpMana();
        this.shared.save();
      },
      title: 'Aumenta il mana massimo',
      currency: 'exp',
      cost: this.shared.hero.maxmana,
      discount: 0,
      enabled: this.checkExperienceCost(this.shared.hero.maxmana, 0),
    });
  }

  checkExperienceCost(cost: number, discount: number): boolean {
    return this.shared.hero.exp >= cost - discount;
  }

  clickBuyItem(item: NpcShopItem) {
    this.audio.play('action');
    item.effect();
    this.ngOnInit();
  }

  clickClose() {
    this.audio.play('action');
    this.closeDialog.emit('close');
  }

}

class NpcShopItem {
  currency: string;
  cost: number;
  discount?: number;
  enabled: boolean;
  name: string;
  title: string;
  effect: ()=>void;
}