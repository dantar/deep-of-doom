import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuVillageChiefComponent } from './menu-village-chief.component';

describe('MenuVillageChiefComponent', () => {
  let component: MenuVillageChiefComponent;
  let fixture: ComponentFixture<MenuVillageChiefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuVillageChiefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuVillageChiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
