import { Component, OnInit } from '@angular/core';
import { MazeMap, MazeTile } from 'src/app/models/maze-map.model';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-maze-map',
  templateUrl: './maze-map.component.html',
  styleUrls: ['./maze-map.component.scss']
})
export class MazeMapComponent implements OnInit {

  constructor(
    public shared: SharedDataService,
  ) { }

  ngOnInit(): void {
  }

  position(t: MazeTile): string {
    return `transform: translate(${100 * t.x}px, ${100 * t.y}px)`
  }

}

