import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertSpinnerComponent } from './alert-spinner.component';

describe('AlertSpinnerComponent', () => {
  let component: AlertSpinnerComponent;
  let fixture: ComponentFixture<AlertSpinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertSpinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
