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


export const initialState: State = customerAdapter.getInitialState();

// Reducer

export function customerReducer(
    state: State = initialState,
    action: actions.CustomerActions) {

    switch (action.type) {

        case actions.ADDED:
            return customerAdapter.addOne(action.payload, state)
    
        case actions.MODIFIED:
            return customerAdapter.updateOne({ 
                id: action.payload.id, 
                changes: action.payload 
            }, state)
    
        case actions.REMOVED:
            return customerAdapter.removeOne(action.payload.id, state)
        
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