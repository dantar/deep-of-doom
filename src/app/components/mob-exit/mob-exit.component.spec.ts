import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobExitComponent } from './mob-exit.component';

describe('MobExitComponent', () => {
  let component: MobExitComponent;
  let fixture: ComponentFixture<MobExitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobExitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobExitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
