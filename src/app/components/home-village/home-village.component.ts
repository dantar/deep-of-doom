import { Component, OnInit } from '@angular/core';
import { AudioPlayService } from 'src/app/services/audio-play.service';
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
    public audio: AudioPlayService,
  ) { }

  ngOnInit(): void {
    this.zoommedto = null;
  }

  clickZoomTo(where: string) {
    this.audio.play('action');
    this.zoommedto = where;
  }

  popZoom() {
    this.zoommedto = null;
  }

}
