import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobTombComponent } from './mob-tomb.component';

describe('MobTombComponent', () => {
  let component: MobTombComponent;
  let fixture: ComponentFixture<MobTombComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobTombComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobTombComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
