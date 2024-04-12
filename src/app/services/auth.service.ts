// Angular
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// app
import { StoreService } from './store.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard {
  constructor(
    public store: StoreService,
    private router: Router
  ) { }

  canActivate() {

    if (!this.store.appState.user.identified) {
      this.router.navigate(['/']);
      return false;
    }
    else {
      return true;
    }

  }
}
