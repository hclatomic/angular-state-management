// Angular
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// app
import { StoreService } from './services/store.service';
import { HeaderComponent } from './header/header.component';
import { ControlComponent } from './control/control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-state-management';
  constructor(
    public store: StoreService
  ) { }
}
