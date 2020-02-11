import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [CustomersComponent, CustomerListComponent, CustomerFormComponent, CustomerDashboardComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FontAwesomeModule
  ]
})
export class CustomersModule { }
