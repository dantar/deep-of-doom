import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobSkeletonComponent } from './mob-skeleton.component';

describe('MobSkeletonComponent', () => {
  let component: MobSkeletonComponent;
  let fixture: ComponentFixture<MobSkeletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobSkeletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
