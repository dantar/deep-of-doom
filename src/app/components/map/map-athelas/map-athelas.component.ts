import { Component, Input, OnInit } from '@angular/core';
import { LandLocation } from 'src/app/models/land.model';
import { LandMapService } from 'src/app/services/land-map.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-map-athelas]',
  templateUrl: './map-athelas.component.html',
  styleUrls: ['./map-athelas.component.scss']
})
export class MapAthelasComponent implements OnInit {

  @Input() location: LandLocation;

  constructor() { }

  ngOnInit(): void {
  }

}

LandMapService.registerItem(
  {
    name: "athelas",
    unlocked: (shared: SharedDataService) => shared.hero.story.includes("wilderness-a"),
  }
);