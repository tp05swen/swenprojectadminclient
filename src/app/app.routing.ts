import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import home components
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

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'Home', component: HomeComponent },
    { path: 'Booking', component: BookingComponent },
    { path: 'Guest', component: GuestComponent },
    { path: 'Payroll', component: PayrollComponent },
    { path: 'Bill', component: BillComponent },
    { path: 'Staff', component: StaffComponent },
    { path: 'Housekeeping', component: HousekeepingComponent },
    { path: 'Report', component: ReportComponent },
    { path: 'Create', component: CreateComponent },
    { path: 'Edit', component: EditComponent },
    { path: 'Feedback', component: FeedbackComponent },
    { path: 'StaffEdit', component: StaffEditComponent },
     // redirect to home page on load
    { path: '', component: LoginComponent, pathMatch: 'full' }];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);