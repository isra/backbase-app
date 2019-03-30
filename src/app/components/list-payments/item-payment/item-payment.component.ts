import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Transaction } from '../../../interfaces/transaction';

@Component({
  selector: 'app-item-payment',
  templateUrl: './item-payment.component.html',
  styleUrls: ['./item-payment.component.scss']
})
export class ItemPaymentComponent implements OnInit {

  @Input() item: Transaction;

  constructor() { }

  ngOnInit() {
  }

  selected(): void {
    console.log('selected', this.item);
  }

}
