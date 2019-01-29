import { Action } from '@ngrx/store';

export enum TodoActionTypes {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
}

export class Increment implements Action {
  readonly type = TodoActionTypes.Increment;
}

export class Decrement implements Action {
  readonly type = TodoActionTypes.Decrement;
}

export class Reset implements Action {
  readonly type = TodoActionTypes.Reset;
}

