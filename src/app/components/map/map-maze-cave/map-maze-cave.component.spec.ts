import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapMazeCaveComponent } from './map-maze-cave.component';

describe('MapMazeCaveComponent', () => {
  let component: MapMazeCaveComponent;
  let fixture: ComponentFixture<MapMazeCaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapMazeCaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapMazeCaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
