// Angular
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// PrimeNg
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { DialogModule } from 'primeng/dialog';
// app
import { CartComponent } from './cart/cart.component';
import { StoreService } from '../../services/store.service';
import { ApiService } from '../../services/api.service';
import { CatalogService } from './catalog.service';
import { ItemCatalog } from '../../classes/app-state.class';

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    BadgeModule,
    DialogModule,
    CommonModule,
    CartComponent
  ],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent implements OnInit {

  constructor(
    public store: StoreService,
    private api: ApiService,
    public cats: CatalogService
  ) { }

  ngOnInit() {
    this.store.appState.ctx.openCheckOut = false;
    this.api.getCatalog().subscribe((cat: ItemCatalog[]) => {
      if (!this.store.appState.catalog.length) {
        this.store.appState.catalog = cat;
      }
    });
  }

  checkOut() {
    this.store.appState.ctx.openCheckOut = true;
  }


}
