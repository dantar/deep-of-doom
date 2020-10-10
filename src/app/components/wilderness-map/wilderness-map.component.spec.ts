import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WildernessMapComponent } from './wilderness-map.component';

describe('WildernessMapComponent', () => {
  let component: WildernessMapComponent;
  let fixture: ComponentFixture<WildernessMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WildernessMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WildernessMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
