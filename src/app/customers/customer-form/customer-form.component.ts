import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../customer.actions';
import * as fromCustomer from '../customer.reducer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  constructor(private store: Store<fromCustomer.State>) { }

  ngOnInit(): void {
  }

  onSubmit(value: any){
    console.log(value)
  }

  createCustomer(value: any) {
    const customer: fromCustomer.Customer = {
      id: new Date().getUTCMilliseconds().toString(),
      nombre: value.nombre,
      apellido: value.nombre,
      edad: parseInt(value.edad, 10),
      dob: value.dob
    }

    this.store.dispatch( new actions.Create(customer) )
  }

  updateCustomer(id, edad) {
    this.store.dispatch( new actions.Update(id, { edad: edad }) )
  }

}
