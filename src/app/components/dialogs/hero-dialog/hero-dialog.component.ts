import { Component, Input, OnInit } from '@angular/core';
import { HeroDialog } from 'src/app/models/hero.model';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-hero-dialog',
  templateUrl: './hero-dialog.component.html',
  styleUrls: ['./hero-dialog.component.scss']
})
export class HeroDialogComponent implements OnInit {

  @Input() dialog: HeroDialog;

  constructor(public shared: SharedDataService) { }

  ngOnInit(): void {
  }

}
