import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCrystalComponent } from './item-crystal.component';

describe('ItemCrystalComponent', () => {
  let component: ItemCrystalComponent;
  let fixture: ComponentFixture<ItemCrystalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCrystalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCrystalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
