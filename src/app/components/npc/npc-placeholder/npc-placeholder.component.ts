import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-npc-placeholder]',
  templateUrl: './npc-placeholder.component.html',
  styleUrls: ['./npc-placeholder.component.scss']
})
export class NpcPlaceholderComponent implements OnInit {

  @Input() npc: string;

  constructor() { }

  ngOnInit(): void {
  }

}
