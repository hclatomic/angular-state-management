// Angular
import { Injectable } from '@angular/core';
// app
import { AppState } from '../classes/app-state.class';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  appState: AppState = new AppState();

  history: AppState[] = [];

  // To control if a new state can be added
  // to the history, or if it is immutable
  // that cannot be modified
  currentStateIsLastState = true;

  constructor() { }
}
