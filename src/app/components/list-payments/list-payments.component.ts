import { Component, OnInit, OnDestroy } from '@angular/core';

import { Transaction } from '../../interfaces/transaction';

import { CommonService } from '../../services/common.service';
import { TransactionsService } from '../../services/transactions.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-payments',
  templateUrl: './list-payments.component.html',
  styleUrls: ['./list-payments.component.scss']
})
export class ListPaymentsComponent implements OnInit, OnDestroy {

  items: Transaction[];
  private subscription: Subscription;

  constructor(
    private commonService: CommonService,
    private transactionsService: TransactionsService
    ) { }

    ngOnInit() {
      this.subscription = this.transactionsService.getAll().subscribe((response: Transaction[]) => {
        this.items = response;
      }, err => {
        this.commonService.handleError('app-list-payments', err);
      });
    }

    ngOnDestroy(): void {
      this.subscription.unsubscribe();
    }

}
