import { Component, Input, OnInit } from '@angular/core';
import { QuestItem } from 'src/app/models/quest.model';

@Component({
  selector: '[app-quest-placeholder]',
  templateUrl: './quest-placeholder.component.html',
  styleUrls: ['./quest-placeholder.component.scss']
})
export class QuestPlaceholderComponent implements OnInit {

  @Input() quest: QuestItem;

  constructor() { }

  ngOnInit(): void {
  }

}
