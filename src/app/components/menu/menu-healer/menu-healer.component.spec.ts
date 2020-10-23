import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHealerComponent } from './menu-healer.component';

describe('MenuHealerComponent', () => {
  let component: MenuHealerComponent;
  let fixture: ComponentFixture<MenuHealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
