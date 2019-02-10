import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { GuestComponent } from './guest/guest.component';
import { PayrollComponent } from './payroll/payroll.component';
import { BillComponent } from './bill/bill.component';
import { StaffComponent } from './staff/staff.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { ReportComponent } from './report/report.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { StaffEditComponent } from './staff-edit/staff-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BookingComponent,
    GuestComponent,
    PayrollComponent,
    BillComponent,
    StaffComponent,
    HousekeepingComponent,
    ReportComponent,
    CreateComponent,
    EditComponent,
    FeedbackComponent,
    StaffEditComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
