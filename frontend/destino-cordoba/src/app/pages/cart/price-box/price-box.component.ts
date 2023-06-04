import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/products/cart.service';

@Component({
  selector: 'app-price-box',
  templateUrl: './price-box.component.html',
  styleUrls: ['./price-box.component.css']
})
export class PriceBoxComponent {
  constructor(private cartService : CartService) { }
personas: number = 1;
@Input() cart: any;


cancel(): void {
  this.cartService.emptyCart();
  this.cart.item = null;

}

}
