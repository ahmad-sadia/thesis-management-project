import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {GradePassComponent} from './grade-pass.component';

describe('SubmissionsAddComponent', () => {
  let component: GradePassComponent;
  let fixture: ComponentFixture<GradePassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GradePassComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GradePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
