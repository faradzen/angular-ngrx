import { Action } from '@ngrx/store';

import { ActionTypes } from './todo.actions';
import { ITodoModel } from './todo.model';

export const initialState: ITodoModel = {
  count: 0
};

export function todoReducer(state = initialState, action: Action) {

  const result = { ...state };

  switch (action.type) {

    case ActionTypes.Increment:
      result.count = result.count + 1;
      return result;

    case ActionTypes.Decrement:
      result.count = result.count - 1;
      return result;

    case ActionTypes.Reset:
      return { ...initialState };

    default:
      return state;
  }
}

