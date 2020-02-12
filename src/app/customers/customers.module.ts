import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoreModule } from '@ngrx/store';

import { customerReducer } from './customer.reducer';
import { CustomerEffects } from './customer.effects'
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [CustomersComponent, CustomerListComponent, CustomerFormComponent, CustomerDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    CustomersRoutingModule,
    FontAwesomeModule,
    EffectsModule.forFeature([CustomerEffects]),
    StoreModule.forFeature('customer', customerReducer)
  ],
  exports: [CustomersComponent, CustomerListComponent, CustomerFormComponent, CustomerDashboardComponent],
})
export class CustomersModule { }