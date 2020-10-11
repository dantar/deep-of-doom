import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBridgeComponent } from './map-bridge.component';

describe('MapBridgeComponent', () => {
  let component: MapBridgeComponent;
  let fixture: ComponentFixture<MapBridgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBridgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBridgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
