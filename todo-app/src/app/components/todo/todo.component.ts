import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { IStoreModel } from 'src/app/IStoreModel';

import { Decrement, Increment, Reset } from './state/todo.actions';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoComponent implements OnInit {

  count$: Observable<number>;

  constructor(private _store: Store<IStoreModel>) {
    this.count$ = _store.pipe(select(s => s.todo.count));
  }

  ngOnInit() {
  }

  increment() {
    this._store.dispatch(new Increment());
  }

  decrement() {
    this._store.dispatch(new Decrement());
  }

  reset() {
    this._store.dispatch(new Reset());
  }

}
