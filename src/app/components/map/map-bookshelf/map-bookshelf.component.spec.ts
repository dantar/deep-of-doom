import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapBookshelfComponent } from './map-bookshelf.component';

describe('MapBookshelfComponent', () => {
  let component: MapBookshelfComponent;
  let fixture: ComponentFixture<MapBookshelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapBookshelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapBookshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
