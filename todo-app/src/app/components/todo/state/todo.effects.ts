import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TodoActionTypes } from './todo.actions';
import { mergeMap } from 'rxjs/operators';
import { of } from 'rxjs/internal/observable/of';

@Injectable()
export class TodoEffects {

  constructor(
    private _actions$: Actions
  ) { }

  @Effect()
  increment$ = this._actions$.pipe(
    ofType(TodoActionTypes.Increment),
    mergeMap(action => {
      console.warn(action);
      return of({ type: 'END' });
    })
  );

}

