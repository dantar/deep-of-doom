import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellProtectPoisonComponent } from './spell-protect-poison.component';

describe('SpellProtectPoisonComponent', () => {
  let component: SpellProtectPoisonComponent;
  let fixture: ComponentFixture<SpellProtectPoisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellProtectPoisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellProtectPoisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
