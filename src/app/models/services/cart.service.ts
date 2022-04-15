import { Injectable } from '@angular/core';

import { PRODUCTS } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getProducts() {
    return PRODUCTS;
  }


  // addToCart(product) {
  //   cart.push(product)
  // }

  // deleteFromCart() {

  // }

  // cartCounter() {

  // }
}
