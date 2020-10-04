import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMobContainer]'
})
export class MobContainerDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
