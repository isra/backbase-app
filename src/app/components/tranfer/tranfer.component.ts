import { Component, OnInit, ViewChild, ElementRef, Input  } from '@angular/core';
import { setFirstTemplatePass } from '@angular/core/src/render3/state';
import { Transaction } from 'src/app/interfaces/transaction';

declare const $: any;
declare const jQuery: any;

@Component({
  selector: 'app-tranfer',
  templateUrl: './tranfer.component.html',
  styleUrls: ['./tranfer.component.scss']
})
export class TranferComponent implements OnInit {

  @ViewChild('toAccount') select: ElementRef;
  merchant: any;
  continue = false;
  amount: number;

  @Input()
  set items(items: Transaction[]) {
    if (items && items.length) {
      this._initSelects(this._prepareItems(items));
    }
  }

  constructor() {
    this.merchant = null;
  }

  ngOnInit() {
  }

  validAmount(amount: number): void {
    this.amount = amount;
    this._validate();
  }

  /**
   * Prepare data for filter in select
   * Notify element selected
   * @param items Transaction[]
   */
  private _initSelects(items: Transaction[]): void {
    console.log('itemss', items);
    const local = this;
    const merchants = $(this.select.nativeElement).selectize({
      valueField: 'id',
      labelField: 'date4filter',
      searchField: ['date4filter'],
      create: false,
      onChange: ((value) => {
        console.log(items);
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
  }

}
