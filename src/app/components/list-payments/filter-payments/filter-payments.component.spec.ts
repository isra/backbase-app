import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPaymentsComponent } from './filter-payments.component';

describe('FilterPaymentsComponent', () => {
  let component: FilterPaymentsComponent;
  let fixture: ComponentFixture<FilterPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
