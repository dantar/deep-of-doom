import {
    animation, trigger, animateChild, group,
    transition, animate, style, query, stagger,
  } from '@angular/animations';
  
export const fallInAppear = animation([
    query('.fall-in-item', [
        style({opacity: 0, transform: 'translateY(-100px)'}),
        stagger('100ms', [
            animate('300ms', style({opacity: 1, transform: 'none'}))
        ])
    ]),
]);