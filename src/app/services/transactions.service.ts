import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private url = '/assets/transactions.json';

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Transaction[]> {
    return this.http.get(this.url)
      .pipe(
      map(response => {
        return response['data'];
      })
    );
  }
}
