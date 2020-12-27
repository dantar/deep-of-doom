import { Component, Input, OnInit } from '@angular/core';
import { LandLocation } from 'src/app/models/land.model';
import { LandMapService } from 'src/app/services/land-map.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: '[app-landmark]',
  templateUrl: './landmark.component.html',
  styleUrls: ['./landmark.component.scss']
})
export class LandmarkComponent implements OnInit {

  @Input() name: string;
  location: LandLocation;

  constructor(
    public shared: SharedDataService,
    private land: LandMapService,
    ) { }

  ngOnInit(): void {
    this.location = this.land.items[this.name];
  }

  clickLocation() {
    this.location.trigger(this.shared);
  }

}
