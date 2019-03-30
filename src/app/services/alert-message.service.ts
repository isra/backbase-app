import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import { AlertMessage } from '../interfaces/alert-message';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {

  private subject = new Subject<any>();

  sendMessage(message: AlertMessage) {
    const msgAlert = this._setMessage(message);
    this.subject.next(msgAlert);
  }
  clearMessage() {
    this.subject.next();
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }

  private _setMessage(msg: AlertMessage): AlertMessage {
    msg.title = msg.title ? msg.title : 'Alert';
    msg.body = msg.body ? msg.body : 'service not available';
    msg.buttonAccept = msg.buttonAccept ? msg.buttonAccept : 'Ok';
    msg.buttonCancel = msg.buttonCancel ? msg.buttonCancel : null;
    msg.item = msg.item ? msg.item : null;
    return msg;
  }
}
