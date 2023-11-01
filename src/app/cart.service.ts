import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];

  addToCart(item: Product) {
    this.cart.push(item);
  }

  removeFromCart(item: string) {
    this.cart = this.cart.filter((ele)=> ele.name!== item)
  }

  getCart() {
    return this.cart;
  }
}
