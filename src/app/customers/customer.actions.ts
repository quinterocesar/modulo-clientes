import { Action } from '@ngrx/store';
import { Customer }  from './customer.reducer';

export const QUERY = '[Customers] query customers';

export const ADDED = '[Customers] added';
export const MODIFIED = '[Customers] modified';
export const REMOVED = '[Customers] removed';

export const CREATE = '[Customers] created';
export const CREATE_SUCCESS  = '[Customers] created success';

export const UPDATE = '[Customers] update';
export const SUCCESS = '[Customers] update success';

export const DELETE = '[Customers] deleted';
export const DELETE_SUCCESS = '[Customers] deleted success';

// Initial query
export class Query implements Action {
    readonly type = QUERY;
    constructor() {}
  }

// AngularFire StateChanges
export class Added implements Action {
    readonly type = ADDED;
    constructor(public payload: Customer) {}
}

export class Modified implements Action {
    readonly type = MODIFIED;
    constructor(public payload: Customer) {}
}

export class Removed implements Action {
    readonly type = REMOVED;
    constructor(public payload: Customer) {}
}

// Run a Firestore Create
export class Create implements Action {
    readonly type = CREATE;
    constructor(public payload: Object) { }
}

export class CreateSuccess implements Action {
    readonly type = CREATE_SUCCESS;
    constructor() {}
}

// Run a Firestore Delete
export class Delete implements Action {
    readonly type = DELETE;
    constructor(public payload: Customer) { }
}

export class DeleteSuccess implements Action {
    readonly type = DELETE_SUCCESS;
    constructor() {}
}

// Run a Firestore Update
export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Customer>,
      ) { }
}

export class Success implements Action {
    readonly type = SUCCESS;
    constructor() {}
}

export type CustomerActions = 
    Query | 
    Added | 
    Modified | 
    Removed | 
    Create | 
    CreateSuccess | 
    Delete | 
    DeleteSuccess | 
    Update | 
    Success;