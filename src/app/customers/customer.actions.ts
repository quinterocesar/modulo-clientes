import { Action } from '@ngrx/store';
import { Customer }  from './customer.reducer';


export const CREATE     = '[Customers] Create'
export const UPDATE     = '[Customers] Update'
export const DELETE     = '[Customers] Delete'

export class Create implements Action {
    readonly type = CREATE;
    constructor(public customer: Customer) { }
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Customer>,
      ) { }
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) { }
}

export type CustomerActions
= Create
| Update
| Delete;