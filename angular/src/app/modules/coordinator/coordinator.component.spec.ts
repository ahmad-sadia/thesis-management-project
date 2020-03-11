import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorComponent } from './coordinator.component';

describe('ReaderComponent', () => {
  let component: CoordinatorComponent;
  let fixture: ComponentFixture<CoordinatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoordinatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
