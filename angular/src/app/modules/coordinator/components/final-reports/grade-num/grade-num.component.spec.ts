import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeNumComponent } from './grade-num.component';

describe('GradeNumComponent', () => {
  let component: GradeNumComponent;
  let fixture: ComponentFixture<GradeNumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GradeNumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradeNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
