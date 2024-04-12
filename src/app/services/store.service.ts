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
  // that cannot be modified. This is to make
  // the state control panel active without
  // interfering with the appState.
  // Useless if the app does not need the state
  // control panel
  currentStateIsLastState = true;

  constructor() { }
}
