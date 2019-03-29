import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Transaction } from '../../../interfaces/transaction';
import { templateRefExtractor } from '@angular/core/src/render3';

@Component({
  selector: 'app-filter-payments',
  templateUrl: './filter-payments.component.html',
  styleUrls: ['./filter-payments.component.scss']
})
export class FilterPaymentsComponent implements OnInit {

  filter: Filter = {
    date: false,
    beneficiary: false,
    amount: false
  };
  typeFilter: string;

  @Output() filterEmit: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.typeFilter = '';
  }

  ngOnInit() {
  }

  search(term: string): void {
    this.filterEmit.emit({
      value: term.trim(),
      type: this.typeFilter
    });
  }



  filterBy(filter): void {
    this.resetFilters();
    this.filter[filter] = true;
    this.typeFilter = filter;
  }

  private resetFilters(): void {
    this.filter.date = false;
    this.filter.beneficiary = false;
    this.filter.amount = false;
  }

}


interface Filter {
  date: boolean;
  beneficiary: boolean;
  amount: boolean;
}
