// Angular
import { Component, Input, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    public store: StoreService,
    public cats: CatalogService,
    private router: Router
  ) { }

  ngDoCheck(): void {
    const N = this.store.history.length - 1;
    this.displayState = JSON.stringify(this.store.appState, null, 2);
    const last = JSON.stringify(this.store.history[N], null, 2);

    if (this.displayState !== last && this.store.currentStateIsLastState) {
      // You better backup the state history on a server, but here
      // we just feed a session object for the present demo
      this.store.history.push(JSON.parse(this.displayState));
      this.currentStateIndex = this.store.history.length - 1;
    }
    this.store.appState.ctx.url = this.router.url;
  }

  back() {
    this.store.currentStateIsLastState = false;
    this.currentStateIndex--;
    if (this.currentStateIndex >= 0) {
      this.store.appState = JSON.parse(JSON.stringify(this.store.history[this.currentStateIndex]));
    }
    else {
      this.currentStateIndex = 0;
    }
    if (this.store.appState.ctx.url) {
      this.router.navigate([this.store.appState.ctx.url]);
    }
  }

  forward() {
    this.currentStateIndex++;
    const N = this.store.history.length - 1;
    if (this.currentStateIndex < N) {
      this.store.appState = JSON.parse(JSON.stringify(this.store.history[this.currentStateIndex]));
    }
    else if (this.currentStateIndex === N) {
      this.store.currentStateIsLastState = true;
      this.store.appState = JSON.parse(JSON.stringify(this.store.history[N]));
    }
    else {
      this.currentStateIndex = N;
      this.store.currentStateIsLastState = true;
    }
    if (this.store.appState.ctx.url) {
      this.router.navigate([this.store.appState.ctx.url]);
    }
  }

}
