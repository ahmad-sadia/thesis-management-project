import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetConfirmsComponent } from './set-confirms.component';

describe('SetConfirmsComponent', () => {
  let component: SetConfirmsComponent;
  let fixture: ComponentFixture<SetConfirmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetConfirmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetConfirmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
