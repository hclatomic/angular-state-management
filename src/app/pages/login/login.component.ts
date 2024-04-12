// Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
// PrimeNg
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
// app
import { ApiService } from '../../services/api.service';
import { StoreService } from '../../services/store.service';
import { User } from '../../classes/app-state.class';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    MessagesModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  error = false;

  constructor(
    public store: StoreService,
    private api: ApiService,
    private router: Router
  ) {
    this.store.appState.user = new User();
  }

  login() {
    if (!this.username) {
      this.error = true;
    }
    else {
      this.error = false;
      this.api.login(this.username, this.password).subscribe((user) => {
        this.store.appState.user = user;
        this.router.navigate(['/catalog']);
      });
    }
  }

}
