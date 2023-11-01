import { Component } from '@angular/core';
import { Product } from '../product';
import { FavouriteService } from '../favourite.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent {

  Favourite: Product[] = [];
  Cart : Product[] = [];

  constructor(private FavouriteService: FavouriteService, private CartService: CartService) { 
    this.Favourite = this.FavouriteService.getFavourite();
    this.Cart = this.CartService.getCart();
  }

  Remove(name:string):void{
    this.FavouriteService.removeFromFavourite(name);
    this.Favourite = this.FavouriteService.getFavourite();
  }

  Add(name:string){
    let single = this.Favourite.find((ele)=> ele.name===name);
    let check = this.Cart.find((ele)=> ele.name===name);
    if(!check){
      if(single){
        this.CartService.addToCart(single);
      }
      this.Cart = this.CartService.getCart();
    }else{
      alert("Already in Cart")
    }
  }

  checkAvaCart(name: string): boolean{
    let check = this.Cart.find((ele)=> ele.name===name);
    if(check){
      return true;
    }else{
      return false;
    }
  }

}
