// Angular
import { Injectable } from '@angular/core';
// app
import { StoreService } from '../../services/store.service';
import { ItemCatalog } from '../../classes/app-state.class';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(
    public store: StoreService
  ) {
    this.store.appState.ctx.numberOfCartItems = 0;
  }

  updateCart() {
    let total = 0;
    let totalPrice = 0;
    for (const item of this.store.appState.cart) {
      total += item.quantity;
      totalPrice += item.product.price * item.quantity;
    }
    totalPrice = parseFloat(totalPrice.toFixed(2));
    this.store.appState.ctx.totalCartPrice = totalPrice;
    this.store.appState.ctx.numberOfCartItems = String(total);
  }

  addToCart(product: ItemCatalog) {
    const exist = this.store.appState.cart.find(item => item.product && item.product.id === product.id);
    if (exist) {
      exist.quantity++;
    }
    else {
      this.store.appState.cart.push({
        quantity: 1,
        product: product
      });
    }
    this.updateCart();
  }
  deleteFromCart(product: ItemCatalog) {
    const exist = this.store.appState.cart.find(item => item.product && item.product.id === product.id);
    if (exist) {
      if (exist.quantity > 1) {
        exist.quantity--;
      }
      else {
        const idx = this.store.appState.cart.findIndex(item => item.product && item.product.id === product.id);
        this.store.appState.cart.splice(idx, 1);
      }
    }
    this.updateCart();
  }

  deleteAllFromCart(product: ItemCatalog) {
    const exist = this.store.appState.cart.find(item => item.product && item.product.id === product.id);
    if (exist) {
      const idx = this.store.appState.cart.findIndex(item => item.product && item.product.id === product.id);
      this.store.appState.cart.splice(idx, 1);
    }
    this.updateCart();
  }

  emptyCart() {
    this.store.appState.cart = [];
    this.updateCart();
  }

  cancelCart() {
    this.store.appState.ctx.openCheckout = false;
    this.store.appState.ctx.goBuy = false;
  }





}
