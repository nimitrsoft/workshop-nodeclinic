import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClinicComponent } from './clinic/clinic.component';
import { CustomerComponent } from './customer/customer.component';
import { PetComponent } from './pet/pet.component';
import { TreatmentComponent } from './treatment/treatment.component';
import { MedicineComponent } from './medicine/medicine.component';
import { ReportComponent } from './report/report.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShareService } from './ShareService';

const appRoutes:Routes = [
  {
    path: '' ,
    component: DashboardComponent
  },
  {
    path: 'clinic',
    component: ClinicComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'pet',
    component: PetComponent
  },
  {
    path: 'treatment',
    component: TreatmentComponent
  },
  {
    path: 'medicine',
    component: MedicineComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }
  
]
@NgModule({
  declarations: [
    AppComponent,
    LeftMenuComponent,
    DashboardComponent,
    ClinicComponent,
    CustomerComponent,
    PetComponent,
    TreatmentComponent,
    MedicineComponent,
    ReportComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
