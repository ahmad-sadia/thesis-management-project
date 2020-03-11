import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {FeedbackSubmitComponent} from './feedback-submit.component';

describe('SubmitDocumentComponent', () => {
  let component: FeedbackSubmitComponent;
  let fixture: ComponentFixture<FeedbackSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackSubmitComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
