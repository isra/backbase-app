import { Injectable } from '@angular/core';

import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerAlertService {

  private subject: Subject<any>;

  constructor() {
    this.subject = new Subject<any>();
  }

  show(): void {
    this.subject.next(true);
  }

  hide(): void {
    this.subject.next(false);
  }

  showAlert(): Observable<any> {
    return this.subject.asObservable();
  }
}
