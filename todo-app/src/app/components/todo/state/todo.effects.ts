import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs/internal/observable/of';
import { mergeMap } from 'rxjs/operators';

import { TodoActionTypes } from './todo.actions';

@Injectable()
export class TodoEffects {

  constructor(
    private _actions$: Actions
  ) { }

  // Implement this interface to dispatch a custom action after the effect has been added.
  // You can listen to this action in the rest of the application to execute something after the effect is registered.
  // implements OnInitEffects
  // ngrxOnInitEffects(): Action {
  //   return { type: '[UserEffects]: Init' };
  // }

  @Effect()
  increment$ = this._actions$.pipe(
    ofType(TodoActionTypes.Increment),
    mergeMap(action => {
      console.warn(action);
      return of({ type: 'END' });
    })
  );

  // example
  // mergeMap(() => this.moviesService.getAll()
  //       .pipe(
  //         map(movies => ({ type: '[Movies API] Movies Loaded Success', payload: movies })),
  //         catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
  //       ))
  //     )

}

