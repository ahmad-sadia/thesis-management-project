import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionsAddComponent } from './submissions-add.component';

describe('SubmissionsAddComponent', () => {
  let component: SubmissionsAddComponent;
  let fixture: ComponentFixture<SubmissionsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
