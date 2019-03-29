import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Transaction } from '../../../interfaces/transaction';
import { templateRefExtractor } from '@angular/core/src/render3';

@Component({
  selector: 'app-filter-payments',
  templateUrl: './filter-payments.component.html',
  styleUrls: ['./filter-payments.component.scss']
})
export class FilterPaymentsComponent implements OnInit {

  @Output() resultFilterTransactions: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();

  private _items: Transaction[];
  private _itemsAfterFilter: Transaction[];

  @Input()
  set items(data:Transaction[]) {
    this._items = data ? data : [];
    this._itemsAfterFilter = Array.from(this._items);
  }

  constructor() { }

  ngOnInit() {
  }

  search(term: string): void {
    if (term.trim()) {
      this._itemsAfterFilter = Array.from(this._items.filter(item => item.date4filter.toLowerCase().indexOf(term.toLowerCase()) >= 0));
    } else {
      this._itemsAfterFilter = Array.from(this._items);
    }
    this.resultFilterTransactions.emit(this._itemsAfterFilter);
    console.log(this._itemsAfterFilter);
    console.log(this._items);

  }

}
