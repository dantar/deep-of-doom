import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBookshelfComponent } from './menu-bookshelf.component';

describe('MenuBookshelfComponent', () => {
  let component: MenuBookshelfComponent;
  let fixture: ComponentFixture<MenuBookshelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuBookshelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBookshelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
