import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { SpinnerAlertService } from '../../../services/spinner-alert.service';

@Component({
  selector: 'app-alert-spinner',
  templateUrl: './alert-spinner.component.html',
  styleUrls: ['./alert-spinner.component.scss']
})
export class AlertSpinnerComponent implements OnInit, OnDestroy {

  show: boolean;

  private subscriptionAlert: Subscription;

  constructor(
    private spinnerAlertService: SpinnerAlertService
  ) {
    this.subscriptionAlert = this.spinnerAlertService.showAlert().subscribe((showAlert: boolean) => {
      this.show = showAlert;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.subscriptionAlert.unsubscribe();
  }

}
