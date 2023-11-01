import { Component } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { FavouriteService } from '../favourite.service';

@Component({
  selector: 'app-disaply-prd',
  templateUrl: './disaply-prd.component.html',
  styleUrls: ['./disaply-prd.component.css']
})
export class DisaplyPrdComponent {

  Cart: Product[] = [];
  Favourite: Product[] = [];

  constructor(private cartService: CartService, private FavouriteService: FavouriteService) { 
    this.Cart = this.cartService.getCart();
    this.Favourite = this.FavouriteService.getFavourite();
  }

  data: Product[] = [
    {showDetails:false,name:"Tomato",description:"It is very good for health, I must give advice please use it in your daily diet.",price: 220,type:"Vegetables",image:"https://t4.ftcdn.net/jpg/02/32/98/31/360_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg"},
    {showDetails:false,name:"Guava",description:"It is very good for health, Specially in summer season, so must try.",price: 890,type:"Fruits",image:"https://www.abcfruits.net/wp-content/uploads/2023/02/IQF-pink-guava-dice.png"},
    {showDetails:false,name:"Potato",description:"As we know, it is our daily vegetables so it should not be expensive.",price: 320,type:"Vegetables",image:"https://cdn.tridge.com/image/original/36/03/0c/36030c5775d5079a599f5ee42c7134ec774acc7a.jpg"},
    {showDetails:false,name:"Onion",description:"It is medical food which gives us lots of things which our body needs in daily basis.",price: 760,type:"Vegetables",image:"https://img.freepik.com/free-vector/red-onion-bulbs-with-chopped-green-onions-isolated_212889-2394.jpg?size=338&ext=jpg"},
    {showDetails:false,name:"Mango",description:"It is medical food which gives us lots of things which our body needs in daily basis.",price: 340,type:"Fruits",image:"https://5.imimg.com/data5/ANDROID/Default/2022/4/JX/UV/MZ/45117192/product-jpeg-500x500.jpg"},
    {showDetails:false,name:"BlackBerry",description:"It is medical food which gives us lots of things which our body needs in daily basis.",price: 130,type:"Fruits",image:"https://www.bigbasket.com/media/uploads/p/l/40085590_1-fresho-blackberry-imported.jpg"},
    {showDetails:false,name:"Chilli",description:"It very bitter things which you have ever eaten in you life but then also, it's very tasty.",price: 80,type:"Vegetables",image:"https://www.jiomart.com/images/product/original/590003533/green-chilli-200-g-product-images-o590003533-p590003533-0-202203150435.jpg?im=Resize=(1000,1000)"},
    {showDetails:false,name:"Pomegranate",description:"It is medical food which gives us lots of things which our body needs in daily basis.",price: 1130,type:"Fruits",image:"https://delishdeliveries.com.au/cdn/shop/products/Untitleddesigncopy5.jpg?v=1696316769"},
    {showDetails:false,name:"Watermelon",description:"It is medical food which gives us lots of things which our body needs in daily basis.",price: 730,type:"Fruits",image:"https://cdn.britannica.com/99/143599-050-C3289491/Watermelon.jpg"},
    {showDetails:false,name:"JackFruit",description:"It is medical food which gives us lots of things which our body needs in daily basis.",price: 430,type:"Vegetables",image:"https://www.jiomart.com/images/product/original/590000232/ripe-jackfruit-whole-approx-8-kg-12-kg-product-images-o590000232-p591026795-0-202207291751.jpg?im=Resize=(420,420)"}
  ];

  Original: Product[] = this.data;

  Toggle(name:string):void{
    
    this.data = this.Original.map((ele)=> ele.name===name ? {...ele,showDetails: !ele.showDetails} : ele);
    this.Original = this.Original.map((ele)=> ele.name===name ? {...ele,showDetails: !ele.showDetails} : ele);
  }

  handleType(e: Event){
    let val = (e.target as HTMLSelectElement).value;
    if(val===""){
      this.data = this.Original;
    }else{
      this.data = this.Original.filter((ele)=> ele.type=== val);
    }
  }

  handleSort(e: Event){
    let val = (e.target as HTMLSelectElement).value;
    if(val===""){
      this.data = this.Original;
    }else if(val ==="asc"){
      this.data = [...this.Original].sort((a,b)=> a.price - b.price)
    }else{
      this.data = [...this.Original].sort((a,b)=> b.price - a.price);
    }
  }

  AddCart(name: string): void {
    let SingleEle = this.Original.find((ele) => ele.name === name);
    let check = this.Cart.find((ele)=> ele.name===name);
    if(!check){
      if (SingleEle) {
        this.cartService.addToCart(SingleEle);
      }
    }else{
      alert("Already in Cart")
    }
    this.Cart = this.cartService.getCart();
  }
  
  AddFavourite(name: string): void {
    let SingleEle = this.Original.find((ele) => ele.name === name);
    let check = this.Favourite.find((ele)=> ele.name===name);
    if(!check){
      if (SingleEle) {
        this.FavouriteService.addToFavourite(SingleEle);
      }
    }else{
      alert("Already in Favourite")
    }
    this.Favourite = this.FavouriteService.getFavourite();
    
  }

  checkAvaCart(name: string): boolean{
    let check = this.Cart.find((ele)=> ele.name===name);
    if(check){
      return true;
    }else{
      return false;
    }
  }

  checkAvaFav(name: string): boolean{
    let check = this.Favourite.find((ele)=> ele.name===name);
    if(check){
      return true;
    }else{
      return false;
    }
  }
  
}
