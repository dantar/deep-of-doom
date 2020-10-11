import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapVillageComponent } from './map-village.component';

describe('MapVillageComponent', () => {
  let component: MapVillageComponent;
  let fixture: ComponentFixture<MapVillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapVillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
