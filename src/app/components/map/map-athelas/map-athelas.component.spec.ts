import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapAthelasComponent } from './map-athelas.component';

describe('MapAthelasComponent', () => {
  let component: MapAthelasComponent;
  let fixture: ComponentFixture<MapAthelasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapAthelasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapAthelasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
