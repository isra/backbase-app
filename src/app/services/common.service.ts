import { Injectable } from '@angular/core';

import { SpinnerAlertService } from './spinner-alert.service';
import { AlertMessageService  } from './alert-message.service';

import { AlertMessage } from '../interfaces/alert-message';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private alertMessageService: AlertMessageService,
    private spinnerAlertService: SpinnerAlertService
  ) { }

  handleError(component: string, err: any) {
    /**
     * method common for handle errors
     */
    console.log('componente', component, 'error', err);
  }

  showSpinner(): void {
    this.spinnerAlertService.show();
  }

  hideSpinner(): void {
    this.spinnerAlertService.hide();
  }

  showAlert(message?: AlertMessage): void {
    const msg: AlertMessage = message ? {
      title: message.title,
      body: message.body,
      buttonAccept: message.buttonAccept || 'Ok',
      buttonCancel: message.buttonCancel || null,
      item: message.item || null
    } as AlertMessage : {
      title: '',
      body: '',
      buttonAccept: '',
      buttonCancel: null,
      item: null
    } as AlertMessage;
    this.alertMessageService.sendMessage(msg);
  }
}
