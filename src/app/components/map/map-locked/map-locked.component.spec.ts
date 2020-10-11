import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLockedComponent } from './map-locked.component';

describe('MapLockedComponent', () => {
  let component: MapLockedComponent;
  let fixture: ComponentFixture<MapLockedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapLockedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapLockedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
