import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobTrollComponent } from './mob-troll.component';

describe('MobTrollComponent', () => {
  let component: MobTrollComponent;
  let fixture: ComponentFixture<MobTrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobTrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobTrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
