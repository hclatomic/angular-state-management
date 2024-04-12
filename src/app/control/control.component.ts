// Angular
import { Component, Input, DoCheck } from '@angular/core';
// PrimeNg
import { ButtonModule } from 'primeng/button';
// app
import { StoreService } from '../services/store.service';
import { CatalogService } from '../pages/catalog/catalog.service';
import { AppState } from '../classes/app-state.class';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.scss',
})
export class ControlComponent implements DoCheck {

  @Input() state = new AppState();

  displayState: string = '';
  currentStateIndex = 0;
  currentStateIsLastState = true;

  constructor(
    public store: StoreService,
    public cats: CatalogService
  ) { }

  ngDoCheck(): void {
    this.displayState = JSON.stringify(this.store.appState, null, 2);
    const last = JSON.stringify(this.store.history[this.store.history.length - 1], null, 2);
    if (this.displayState !== last && this.currentStateIsLastState) {
      this.store.history.push(JSON.parse(this.displayState));
      this.currentStateIndex = this.store.history.length - 1;
    }
  }

  back() {
    this.currentStateIsLastState = false;
    this.currentStateIndex--;
    if (this.currentStateIndex >= 0) {
      this.store.appState = this.store.history[this.currentStateIndex];
    }
    else {
      this.currentStateIndex = 0;
    }
  }

  forward() {
    this.currentStateIndex++;
    const N = this.store.history.length - 1;
    if (this.currentStateIndex < N) {
      this.store.appState = this.store.history[this.currentStateIndex];
    }
    else if (this.currentStateIndex === N) {
      this.currentStateIsLastState = true;
      this.store.appState = this.store.history[this.currentStateIndex];
    }
    else {
      this.currentStateIndex = N;
    }
  }


}
