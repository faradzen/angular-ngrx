import { Action } from '@ngrx/store';

import { TodoActionTypes } from './todo.actions';
import { ITodoModel } from './todo.model';


export const initialState: ITodoModel = {
  count: 0
};

export function todoReducer(state = initialState, action: Action) {

  const result = { ...state };

  switch (action.type) {

    case TodoActionTypes.Increment:
      result.count = result.count + 1;
      return result;

    case TodoActionTypes.Decrement:
      result.count = result.count - 1;
      return result;

    case TodoActionTypes.Reset:
      return { ...initialState };

    default:
      return state;
  }
}

