// Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// PrimeNg
import { MenubarModule } from 'primeng/menubar';
// app
import { StoreService } from '../services/store.service';
import { AppState, User } from '../classes/app-state.class';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  items = [
    { label: 'catalog', icon: 'pi pi-book', command: () => { this.navigate('catalog'); } },
    { label: 'profile', icon: 'pi pi-user', command: () => { this.navigate('profile'); } },
    { label: 'logout', icon: 'pi pi-sign-out', command: () => { this.logout(); } },
  ];

  constructor(
    public store: StoreService,
    private router: Router
  ) { }

  logout() {
    this.store.appState = new AppState();
    this.router.navigate(['/']);
  }

  navigate(url: string) {
    this.router.navigate(['/' + url]);
  }

}
