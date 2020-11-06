import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupRewardComponent } from './popup-reward.component';

describe('PopupRewardComponent', () => {
  let component: PopupRewardComponent;
  let fixture: ComponentFixture<PopupRewardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupRewardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupRewardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
