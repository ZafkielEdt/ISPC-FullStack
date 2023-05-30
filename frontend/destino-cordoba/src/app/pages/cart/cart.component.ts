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
  
  personas: number = 1;



  ngOnInit(): void {
    document.body.style.backgroundColor = '#f5f5f5';
    if(this.loginService.islogged()){
      this.cartService.loadCart();

    }
    if (this.cartService.getCurrentCart()) {
      this.cart.item = this.cartService.getCurrentCart();
      this.personas = (this.cart.item.adults?.length ?? 1) + (this.cart.item.childs?.length ?? 0);
    }
  }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = "#fff";
    this.cartService.emptyCart();
  }

}
