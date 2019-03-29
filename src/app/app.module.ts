import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { DateMonthYearPipe } from './pipes/date-month-year.pipe';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    // DateMonthYearPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
