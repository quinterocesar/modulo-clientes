import { ActionReducerMap } from '@ngrx/store';
import { customerReducer } from '../customers/customer.reducer';

export const reducers: ActionReducerMap<any> = {
    customer: customerReducer
};