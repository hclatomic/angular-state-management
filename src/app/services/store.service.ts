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

  constructor() { }
}
