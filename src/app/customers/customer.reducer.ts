import * as actions from './customer.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

// Main data interface

export interface Customer {
    id: string;
    nombre: string;
    apellido: string;
    edad: number;
    dob: string;
}

// Entity adapter
export const customerAdapter = createEntityAdapter<Customer>();
export interface State extends EntityState<Customer> { }


// Default data / initial state

const defaultCustomer = {
    ids: ['123'],
    entities: {
        '123': {
            id: '123',
            nombre: '',
            apellido: '',
            edad: 0,
            dob: ''
        }
    }
}

export const initialState: State = customerAdapter.getInitialState(defaultCustomer);

// Reducer

export function customerReducer(
    state: State = initialState,
    action: actions.CustomerActions) {

    switch (action.type) {
        
        case actions.CREATE:
            return customerAdapter.addOne(action.customer, state);

        case actions.UPDATE:
            return customerAdapter.updateOne({
                id: action.id,
                changes: action.changes,
            }, state);
        
        case actions.DELETE:
            return customerAdapter.removeOne(action.id, state)

        default:
            return state;
        }

}

// Create the default selectors

export const getCustomerState = createFeatureSelector<State>('customer');

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = customerAdapter.getSelectors(getCustomerState);