import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemSpiritImpComponent } from './item-spirit-imp.component';

describe('ItemSpiritImpComponent', () => {
  let component: ItemSpiritImpComponent;
  let fixture: ComponentFixture<ItemSpiritImpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemSpiritImpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemSpiritImpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
