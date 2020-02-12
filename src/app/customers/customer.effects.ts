import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Customer } from './customer.reducer';
import * as customerActions from './customer.actions';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { switchMap, mergeMap, map } from 'rxjs/operators';

@Injectable()
export class CustomerEffects {


    @Effect()
    query$: Observable < Action > = this.actions$.pipe(
      ofType(customerActions.QUERY),
      switchMap(action => {
        return this.afs.collection < Customer > ('customers').stateChanges()
      }),
      mergeMap(actions => actions),
      map(action => {
        return {
          type: `[Customers] ${action.type}`,
          payload: {
            id: action.payload.doc.id,
            ...action.payload.doc.data()
          }
        };
      })
    );

    @Effect() 
    create$: Observable<Action> = this.actions$.pipe(
        ofType(customerActions.CREATE),
        map((action: customerActions.Create) => action.payload),
        switchMap(data => {
          const ref = this.afs.collection('customers')
            return of( ref.add(data) )
        }),
        map(() => new customerActions.CreateSuccess())
    )

    @Effect() 
    update$: Observable<Action> = this.actions$.pipe(
        ofType(customerActions.UPDATE),
        map((action: customerActions.Update) => action),
        switchMap(data => {
            const ref = this.afs.doc<Customer>(`customers/${data.id}`)
            return of( ref.update(data.changes) )
        }),
        map(() => new customerActions.Success())
    )
    
    @Effect() 
    delete$: Observable<Action> = this.actions$.pipe(
        ofType(customerActions.DELETE),
        map((action: customerActions.Delete) => action),
        switchMap(data => {
          console.log(data)
          const ref = this.afs.doc(`customers/${data.payload}`)
          return of( ref.delete() )
        }),
        map(() => new customerActions.Success())
    )

    constructor(private actions$: Actions, private afs: AngularFirestore) { }    
}