import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  itemsTransaction: Transaction[];

  constructor() { }

  ngOnInit() {
  }

  itemsLoading(items: Transaction[]): void {
    this.itemsTransaction = items;
  }

}
