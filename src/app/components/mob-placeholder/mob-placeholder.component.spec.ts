import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobPlaceholderComponent } from './mob-placeholder.component';

describe('MobPlaceholderComponent', () => {
  let component: MobPlaceholderComponent;
  let fixture: ComponentFixture<MobPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobPlaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
