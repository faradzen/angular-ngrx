import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { todoReducer } from './components/todo/state/todo.reducer';
import { TodoComponent } from './components/todo/todo.component';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './components/todo/state/todo.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      todo: todoReducer
    }),
    EffectsModule.forRoot([
      TodoEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
