import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/service/login.service';
import { Cart } from 'src/app/models/cart';
import { CartService } from 'src/app/services/products/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  

  constructor(private cartService : CartService,private loginService:LoginService) {}

  cart: Cart = {
    id: 1,
    totalValue: 100000,
    item: null,
  };

  cancel(): void {
    this.cartService.emptyCart();
    this.cart.item = null;

  }

  ngOnInit(): void {
    document.body.style.backgroundColor = '#f5f5f5';
    if(this.loginService.islogged()){
      this.cartService.loadCart();
    }
    if (this.cartService.getCurrentCart()) {
      this.cart.item = this.cartService.getCurrentCart();
    }
  }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = "#fff";
  }

}
