import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-home-village',
  templateUrl: './home-village.component.html',
  styleUrls: ['./home-village.component.scss']
})
export class HomeVillageComponent implements OnInit {

  constructor(
    public shared: SharedDataService,
  ) { }

  ngOnInit(): void {
  }

  healWounds() {
    this.shared.gold(-3);
    this.shared.hero.poison = 0;
    this.shared.hero.life = this.shared.hero.maxlife;
    this.shared.hero.mana = this.shared.hero.maxmana;
  }

  enterMaze() {
    if (this.shared.hero.life > 0) {
      this.shared.newMaze();
    }
  }

}
