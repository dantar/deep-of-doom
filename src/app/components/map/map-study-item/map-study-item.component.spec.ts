import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapStudyItemComponent } from './map-study-item.component';

describe('MapStudyItemComponent', () => {
  let component: MapStudyItemComponent;
  let fixture: ComponentFixture<MapStudyItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapStudyItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapStudyItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
