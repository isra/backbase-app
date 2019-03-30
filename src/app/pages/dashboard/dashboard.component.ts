import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';

import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  itemsTransaction: Transaction[];

  constructor(
    private commonService: CommonService
  ) {
  }

  ngOnInit() {
    this.commonService.showSpinner();
  }

  itemsLoading(items: Transaction[]): void {
    this.itemsTransaction = items;
    this.commonService.hideSpinner();
  }

}
