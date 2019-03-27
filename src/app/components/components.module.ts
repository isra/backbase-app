import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { ItemPaymentComponent } from './list-payments/item-payment/item-payment.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { AlertSpinnerComponent } from './alert/alert-spinner/alert-spinner.component';
import { AlertCommonComponent } from './alert/alert-common/alert-common.component';
import { LayoutBreadcrumbComponent } from './layout/layout-breadcrumb/layout-breadcrumb.component';

@NgModule({
  declarations: [
    ListPaymentsComponent,
    ItemPaymentComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    AlertSpinnerComponent,
    AlertCommonComponent,
    LayoutBreadcrumbComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListPaymentsComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    AlertSpinnerComponent,
    AlertCommonComponent
  ]
})
export class ComponentsModule { }
