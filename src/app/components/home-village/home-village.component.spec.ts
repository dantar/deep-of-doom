import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVillageComponent } from './home-village.component';

describe('HomeVillageComponent', () => {
  let component: HomeVillageComponent;
  let fixture: ComponentFixture<HomeVillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeVillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
