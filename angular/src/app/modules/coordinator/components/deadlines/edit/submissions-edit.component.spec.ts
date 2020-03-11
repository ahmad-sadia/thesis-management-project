import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsEditComponent } from './submissions-edit.component';

describe('SubmissionsAddComponent', () => {
  let component: SubmissionsEditComponent;
  let fixture: ComponentFixture<SubmissionsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
