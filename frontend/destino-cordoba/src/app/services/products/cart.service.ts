import { Injectable } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { PackageTravel } from 'src/app/models/package-travel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart!: PackageTravel;
  


  constructor() { }

  saveCart():void{
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  loadCart():void{
    const cart = localStorage.getItem('cart');
    if(cart){
      this.cart = JSON.parse(cart);
    }
  }
  addItem(item:PackageTravel):void{
    this.cart = item;
    this.saveCart();
  }

  
  emptyCart():void{
    localStorage.clear();

  }
  getCurrentCart():PackageTravel{
    return this.cart;
  }


}
