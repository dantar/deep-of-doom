import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastSpellComponent } from './cast-spell.component';

describe('CastSpellComponent', () => {
  let component: CastSpellComponent;
  let fixture: ComponentFixture<CastSpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CastSpellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
