import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  favourite: Product[] = [];

  addToFavourite(item: Product) {
    this.favourite.push(item);
  }

  removeFromFavourite(item: string) {
    this.favourite = this.favourite.filter((ele)=> ele.name!== item)
  }

  getFavourite() {
    return this.favourite;
  }
}
