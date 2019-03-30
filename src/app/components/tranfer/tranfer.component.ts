import { Component, OnInit, ViewChild, ElementRef, Input  } from '@angular/core';

import { Transaction } from '../../interfaces/transaction';
import { AlertMessage } from '../../interfaces/alert-message';

import { TransactionsService } from '../../services/transactions.service';
import { CommonService } from '../../services/common.service';

declare const $: any;
declare const jQuery: any;

@Component({
  selector: 'app-tranfer',
  templateUrl: './tranfer.component.html',
  styleUrls: ['./tranfer.component.scss']
})
export class TranferComponent implements OnInit {

  @ViewChild('toAccount') select: ElementRef;

  merchant?: Transaction;
  continue = false;
  amount: number;
  balanceAfterTransfer: number;
  labelFromAccount: string;

  // $5824.76

  /**
   * @TODO
   * set this data of service
   */
  currentBalanceClient: number;
  // A User shouldn't be able to transfer money beyond a balance of $ -500.00.
  limitCreditClient: number;

  @Input()
  set items(items: Transaction[]) {
    if (items && items.length) {
      this._initSelects(this._prepareItems(items));
    }
  }

  constructor(
    private transactionsService: TransactionsService,
    private commonService: CommonService
  ) {
    this.merchant = null;
    this.currentBalanceClient = 5824.76;
    // A User shouldn't be able to transfer money beyond a balance of $ -500.00.
    this.limitCreditClient = -500;
    this.labelFromAccount = `Free Checking(4692) - ${this.currentBalanceClient}`;
  }

  ngOnInit() {
  }

  validAmount(amount: number): void {
    this.amount = amount;
    this.balanceAfterTransfer = +(this.currentBalanceClient - amount).toFixed(2);
    this._validate();
  }

  /**
   * Simulate save transaction
   */
  sendTransaction(): void {
    this._validate();

    if (this.continue) {

      const message: AlertMessage = {
        title: 'Continue with the transaction?',
        body: `<strong>$${parseFloat(this.amount.toString()).toFixed(2)}
TO </strong> ${this.merchant.merchant}`,
        buttonAccept: 'Continue',
        buttonCancel: 'Cancel',
        item: {}
      };

      this.commonService.showAlert(message);

    }
  }

  /**
   * Prepare data for filter in select
   * Notify element selected
   * @param items Transaction[]
   */
  private _initSelects(items: Transaction[]): void {

    const local = this;
    const merchants = $(this.select.nativeElement).selectize({
      valueField: 'id',
      labelField: 'date4filter',
      searchField: ['date4filter'],
      create: false,
      onChange: ((value) => {
        local.merchant = (value && value.trim().length) ? items[value] : null;
        this._validate();
      })
    });
    const selectMerchants = merchants[0].selectize;
    selectMerchants.load((callback) => {
      callback(items);
    });
  }

  /**
   * TODO
   * Read of marchants of service
   * @param items Array of Merchants
   */
  private _prepareItems(items: Transaction[]): Transaction[] {
    return items.map((item, index) => {
      item.id = index;
      return item;
    });
  }

  private _validate(): void {
    this.continue = false;
    if (this.merchant && this.amount) {
      this.continue = true;
    }
    if (this.balanceAfterTransfer <= this.limitCreditClient) {
      this.continue = false;
    }
  }

  alertAccept(): void {

    setTimeout(() => {

      this.currentBalanceClient = this.balanceAfterTransfer;
      this.labelFromAccount = `Free Checking(4692) - ${this.currentBalanceClient}`;

      const newTransaction = Object.assign({}, this.merchant);
      newTransaction.amount = this.amount;
      newTransaction.transactionDate = (new Date()).getTime().toString();

      this.transactionsService.newData(newTransaction);
      this.amount = 0;

      this.commonService.hideSpinner();

    }, 500);

    this.commonService.showSpinner();
    this.continue = false;

  }

  alertCancel(): void {

    this.amount = 0;
    this.continue = false;
    this.balanceAfterTransfer = this.currentBalanceClient;

  }



}
