import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSpellbookComponent } from './menu-spellbook.component';

describe('MenuSpellbookComponent', () => {
  let component: MenuSpellbookComponent;
  let fixture: ComponentFixture<MenuSpellbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSpellbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSpellbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
