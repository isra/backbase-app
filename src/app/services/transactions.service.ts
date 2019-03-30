import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Transaction } from '../interfaces/transaction';

import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private url = '/assets/transactions.json';

  private transactions = new Subject<any>();
  private transactionList: Transaction[];

  constructor(
    private http: HttpClient,
    private commonService: CommonService
  ) { }

  /**
   * @TODO
   * Validate if data typeof Transaction
   *
   * @param data any
   */
  newData(data: any) {
    if (Array.isArray(data)) {
      this.transactions.next(data);
    } else {
      this.transactionList = [data, ...this.transactionList];
      this.transactions.next(this.transactionList);
    }
  }

  getResponse(): Observable<any> {
    return this.transactions.asObservable();
  }

  getAll() {
    return this.http.get(this.url).subscribe(response => {
      if (response['data'] && Array.isArray(response['data'])) {
        this.transactionList = response['data'].map(e => {
          return {
            amount: e.amount,
            categoryCode: e.categoryCode,
            merchant: e.merchant,
            merchantLogo: e.merchantLogo,
            transactionDate: e.transactionDate,
            transactionType: e.transactionType,
            date4filter: `${e.merchant} ${e.transactionType}`
          };
        });
        this.newData(this.transactionList);
      } else {
        this.commonService.handleError('TransactionsService|getAll', 'ERROR STRUCTURE JSON');
      }

    }, err => {
      this.commonService.handleError('TransactionsService|getAll', err);
    });
  }

  /* getAll(): Observable<Transaction[]> {
    return this.http.get(this.url)
      .pipe(
      map(response => {
        return response['data'].map(e => {
          return {
            amount: e.amount,
            categoryCode: e.categoryCode,
            merchant: e.merchant,
            merchantLogo: e.merchantLogo,
            transactionDate: e.transactionDate,
            transactionType: e.transactionType,
            date4filter: `${e.merchant} ${e.transactionType}`
          }
        });
      })
    );
  } */
}
