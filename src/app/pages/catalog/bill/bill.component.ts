// Angular
import { Component } from '@angular/core';
// PrimeNg
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
// app
import { StoreService } from '../../../services/store.service';
import { CatalogService } from '../catalog.service';


@Component({
  selector: 'app-bill',
  standalone: true,
  imports: [TableModule, ButtonModule],
  templateUrl: './bill.component.html',
  styleUrl: './bill.component.scss'
})
export class BillComponent {

  constructor(
    public store: StoreService,
    public cats: CatalogService
  ) {
    this.store.appState.ctx.orderClosed = this.store.appState.ctx.orderClosed || false;
  }

  confirm() {

    // You should here call a server to validate the order.

    this.store.appState.user.orders.push({
      date: new Date().toDateString(),
      order: JSON.parse(JSON.stringify(this.store.appState.cart))
    });
    this.store.appState.cart = [];
    this.cats.updateCart();
    this.store.appState.ctx.orderClosed = true;
  }

  close() {
    this.cats.cancelCart();
    this.store.appState.ctx.orderClosed = true;
  }


}
