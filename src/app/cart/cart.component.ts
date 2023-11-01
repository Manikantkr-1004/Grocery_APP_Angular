import { Component } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  Cart: Product[] = [];

  constructor(private cartService: CartService) { 
    this.Cart = this.cartService.getCart();
  }

  Remove(name:string):void{
    this.cartService.removeFromCart(name);
    this.Cart = this.cartService.getCart();
  }
}
