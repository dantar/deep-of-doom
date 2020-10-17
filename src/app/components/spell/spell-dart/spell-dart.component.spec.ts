import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDartComponent } from './spell-dart.component';

describe('SpellDartComponent', () => {
  let component: SpellDartComponent;
  let fixture: ComponentFixture<SpellDartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellDartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
