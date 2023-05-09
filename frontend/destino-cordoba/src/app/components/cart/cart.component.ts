import { Component, OnDestroy, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart';
import { CartServiceService } from 'src/app/services/products/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  

  constructor(private cartService : CartServiceService) {}
  // cart: Cart = {
  //   id: 1,
  //   totalValue: 0,
  //   totalItems: 0,
  //   item: {
  //     id: 0,
  //     title: '',
  //     description: '',
  //     price: 0,
  //     gallery: [],
  //     days: 0,
  //     nights: 0,
  //     childs: 0,
  //     adults: 0,
  //     experiences: [],
  //   },
  
  //   }
  cart: Cart = {
    id: 1,
    totalValue: 0,
    totalItems: 0,
    item: null,
  };

  cancel(): void {
    this.cartService.emptyCart();
    this.cart.item = null;
  }

  ngOnInit(): void {
    this.cartService.loadCart();
    if (this.cartService.getCurrentCart()) {
      this.cart.item = this.cartService.getCurrentCart();
    }
    // this.cart.item = this.cartService.getCurrentCart();
  }

  ngOnDestroy(): void {

  }

}
