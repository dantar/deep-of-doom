import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild } from '@angular/core';
import { MobContainerDirective } from 'src/app/directives/mob-container.directive';
import { MazeMob } from 'src/app/models/maze-map.model';
import { DungeonMasterService } from 'src/app/services/dungeon-master.service';
import { MobSkeletonComponent } from '../mob-skeleton/mob-skeleton.component';

@Component({
  selector: 'app-mob-placeholder,[app-mob-placeholder]',
  templateUrl: './mob-placeholder.component.html',
  styleUrls: ['./mob-placeholder.component.scss']
})
export class MobPlaceholderComponent implements OnInit {

  @Input() mob: MazeMob;
  @ViewChild(MobContainerDirective, {static: true}) mobDirective: MobContainerDirective;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private master: DungeonMasterService,
    ) { }

  ngOnInit(): void {
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.master.mobs[this.mob.name].component);
    const viewContainerRef = this.mobDirective.viewContainerRef;
    console.log(viewContainerRef);
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    console.log(componentRef);
    // componentRef.instance.data = adItem.data;
  }

}
