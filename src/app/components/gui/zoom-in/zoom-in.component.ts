import { animate, query, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-zoom-in]',
  templateUrl: './zoom-in.component.html',
  styleUrls: ['./zoom-in.component.scss'],
  animations: [
    trigger('zoomIn', [
      transition(':enter', [
        query('.zoom-in', [
          style({transform: 'scale(0.6)'}),
          animate('300ms', style({transform: 'scale(1)'})),
        ])  
      ])
    ])
  ]
})
export class ZoomInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
