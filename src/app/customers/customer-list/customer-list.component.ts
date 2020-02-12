import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as actions from '../customer.actions';
import * as fromCustomer from '../customer.reducer';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Observable<any>;
  faTrash = faTrash;
  constructor(private store: Store<fromCustomer.State>) { }

  ngOnInit() {
    this.customers = this.store.select(fromCustomer.selectAll)
  }

  deleteCustomer(id) {
    this.store.dispatch( new actions.Delete(id) )
  }
}