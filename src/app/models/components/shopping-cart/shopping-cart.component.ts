import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/types';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(
    private carter: CartService
  ) { }

    cart: IProduct[] = [];
    countId: number = 0;
  ngOnInit(): void {
    this.cart = this.carter.getCart();
    this.countId = this.carter.getCurrentCount();
  }

}
