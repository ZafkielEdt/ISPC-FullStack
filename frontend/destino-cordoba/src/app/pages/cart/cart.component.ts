import { Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/service/login.service';
import { Cart } from 'src/app/models/cart';
import { Package } from 'src/app/models/package';
import { CartService } from 'src/app/services/products/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  

  constructor(private cartService : CartService,private loginService:LoginService) {}
  package: number = 0;
  
  cart: Cart = {
    id: 0,
    totalValue: 0,
    item: null,
  };
  
  personas: number = 1;
  amount: number = 0;


  ngOnInit(): void {
    document.body.style.backgroundColor = '#f5f5f5';
    if(this.loginService.islogged()){
      this.cartService.loadCart();

    }
    if (this.cartService.getCurrentCart()) {
      this.cart.item = this.cartService.getCurrentCart();
      this.personas = (this.cart.item.adults?.length ?? 1) + (this.cart.item.childs?.length ?? 0);
      this.amount = this.cart.item.price;
      this.package = this.cart.item.id;
    }
  }

  ngOnDestroy(): void {
    document.body.style.backgroundColor = "#fff";
    this.cartService.emptyCart();
  }

}
