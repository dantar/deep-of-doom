import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobShadowComponent } from './mob-shadow.component';

describe('MobShadowComponent', () => {
  let component: MobShadowComponent;
  let fixture: ComponentFixture<MobShadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobShadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobShadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
