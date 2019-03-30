import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { Routes, RouterModule } from '@angular/router';

// Components
import { ListPaymentsComponent } from './list-payments/list-payments.component';
import { ItemPaymentComponent } from './list-payments/item-payment/item-payment.component';
import { FilterPaymentsComponent } from './list-payments/filter-payments/filter-payments.component';
import { LayoutHeaderComponent } from './layout/layout-header/layout-header.component';
import { LayoutFooterComponent } from './layout/layout-footer/layout-footer.component';
import { LayoutBreadcrumbComponent } from './layout/layout-breadcrumb/layout-breadcrumb.component';
import { AlertSpinnerComponent } from './alert/alert-spinner/alert-spinner.component';
import { AlertCommonComponent } from './alert/alert-common/alert-common.component';
import { AlertDialogComponent } from './alert/alert-dialog/alert-dialog.component';
import { TranferComponent } from './tranfer/tranfer.component';

// Pipes
import { DateMonthYearPipe } from '../pipes/date-month-year.pipe';
import { FormatNumbersPipe } from '../pipes/format-numbers.pipe';


// Directives
import { NumbersDirective } from '../directives/numbers.directive';



@NgModule({
  declarations: [
    ListPaymentsComponent,
    ItemPaymentComponent,
    FilterPaymentsComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    AlertSpinnerComponent,
    AlertCommonComponent,
    AlertDialogComponent,
    LayoutBreadcrumbComponent,
    TranferComponent,
    NumbersDirective,
    DateMonthYearPipe,
    FormatNumbersPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    ListPaymentsComponent,
    TranferComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    LayoutBreadcrumbComponent,
    AlertSpinnerComponent,
    AlertCommonComponent
  ]
})
export class ComponentsModule { }
