import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Transaction } from '../../interfaces/transaction';

import { CommonService } from '../../services/common.service';
import { TransactionsService } from '../../services/transactions.service';
import { Subscription } from 'rxjs';
import { filterQueryId } from '@angular/core/src/view/util';

@Component({
  selector: 'app-list-payments',
  templateUrl: './list-payments.component.html',
  styleUrls: ['./list-payments.component.scss']
})
export class ListPaymentsComponent implements OnInit, OnDestroy {

  items: Transaction[];
  filtersItems: Transaction[];
  private subscription: Subscription;

  @Output() itemsLoadingEmit: EventEmitter<Transaction[]> = new EventEmitter<Transaction[]>();

  constructor(
    private commonService: CommonService,
    private transactionsService: TransactionsService
    ) { }

    ngOnInit() {
      this.subscription = this.transactionsService.getAll().subscribe((response: Transaction[]) => {
        this.items = response;
        this.filtersItems = response;
        this.itemsLoadingEmit.emit(this.items);
      }, err => {
        this.commonService.handleError('app-list-payments', err);
      });
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

    filterChanged(filter: any): void {
      let filterType: string;
      switch (filter.type) {
        case 'amount':
          filterType = 'amount';
          break;
        case 'beneficiary':
          filterType = 'merchant';
          break;
        default:
          filterType = 'date4filter';
      }

      if (filter.value) {
        this.filtersItems = this.items.filter((item: Transaction) => item[filterType].toLowerCase().indexOf(filter.value) >= 0);
      } else {
        this.filtersItems = this.items;
      }
    }

}
