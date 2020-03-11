import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBiddingComponent } from './set-bidding.component';

describe('SetBiddingComponent', () => {
  let component: SetBiddingComponent;
  let fixture: ComponentFixture<SetBiddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetBiddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetBiddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
