import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertMessageService } from '../../../services/alert-message.service';
import { AlertMessage } from '../../../interfaces/alert-message';


@Component({
  selector: 'app-alert-dialog',
  templateUrl: './alert-dialog.component.html',
  styleUrls: ['./alert-dialog.component.scss']
})
export class AlertDialogComponent implements OnInit, OnDestroy {

  @Output() acceptClicked: EventEmitter<any> = new EventEmitter();
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter();


  visible = false;
  visibleAnimate = false;
  twoButtons = false;
  icon = '';

  message: AlertMessage;

  private code = 0;
  private hasAction = false;
  private subscription: Subscription;


  constructor(
    private messageService: AlertMessageService
  ) {
    this.subscription = this.messageService
      .getMessage()
      .subscribe(
        (message: AlertMessage) => {
          this.showMessage(message);
        }
      );
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  aceptar() {
    this.hide();
    this.acceptClicked.emit(this.message.item);
  }

  cancelar() {
    this.hide();
    this.cancelClicked.emit(this.message.item);
  }

  showMessage(mensaje: AlertMessage): void {
    this.message = mensaje;
    this.icon = '/assets/images/ico-info.png';
    if (this.message.buttonCancel) {
      this.twoButtons = true;
    } else {
      this.twoButtons = false;
    }
    this.visible = true;
    this.visibleAnimate = true;
  }

  hide(): void {
    this.visible = false;
    this.visibleAnimate = false;
  }

}
