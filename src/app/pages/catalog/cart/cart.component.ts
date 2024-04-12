// Angular
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// PrimeNg
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
// app
import { StoreService } from '../../../services/store.service';
import { CatalogService } from '../catalog.service';
import { BillComponent } from '../bill/bill.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TableModule,
    ButtonModule,
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    BillComponent
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  street = '';
  city = '';

  constructor(
    public store: StoreService,
    public cats: CatalogService
  ) {
    this.store.appState.ctx.goBuy = false;
  }

  buyNow() {
    this.store.appState.ctx.goBuy = true;
    this.street = this.store.appState.user.address.street;
    this.city = this.store.appState.user.address.city;
  }

  displayBill() {
    this.store.appState.user.address.street = this.street;
    this.store.appState.user.address.city = this.city;
  }



}
