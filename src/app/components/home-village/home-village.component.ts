import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-home-village',
  templateUrl: './home-village.component.html',
  styleUrls: ['./home-village.component.scss']
})
export class HomeVillageComponent implements OnInit {

  zoommedto: string;

  constructor(
    public shared: SharedDataService,
  ) { }

  ngOnInit(): void {
    this.zoommedto = null;
  }

  zoomTo(where: string) {
    this.zoommedto = where;
  }

  popZoom() {
    this.zoommedto = null;
  }

  healWounds() {
    this.shared.gold(-3);
    this.shared.hero.poison = 0;
    this.shared.hero.life = this.shared.hero.maxlife;
    this.shared.hero.mana = this.shared.hero.maxmana;
  }

}
