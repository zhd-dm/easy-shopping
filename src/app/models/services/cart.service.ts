import { Injectable } from '@angular/core';
import { IProduct } from 'src/app/types';

import { PRODUCTS } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  getAllProducts() {
    if(!localStorage.getItem('Products')) {
      localStorage.setItem('Products', JSON.stringify(PRODUCTS));
    }
    let storage: IProduct[] = [];
    storage = JSON.parse(localStorage.getItem('Products')!);
    return storage;
  }

  setProductsToCart(art: string) {
    let cart: any = [];
    if(!localStorage.getItem('Cart')) {
      localStorage.setItem('Cart', JSON.stringify([]));
    }
    let data = JSON.parse(localStorage.getItem('Products')!);
        cart = JSON.parse(localStorage.getItem('Cart')!);
    for(let i = 0; i < data.length; i++) {
      if(art === data[i].art) {
        cart.push(data[i]);
      }
    }
    return localStorage.setItem('Cart', JSON.stringify(cart));
  }

  getCount() {
    if(!localStorage.getItem('Cart')) {
      return 0;
    } else {
      let storage = JSON.parse(localStorage.getItem('Cart')!);
      return storage.length;
    }
  }

  getCart() {
    if(!localStorage.getItem('Cart')) {
      localStorage.setItem('Cart', JSON.stringify([]));
    }
    let storage = JSON.parse(localStorage.getItem('Cart')!);
    return storage;
  }

  getCurrentCount() {
    if(!localStorage.getItem('Cart')) {
      localStorage.setItem('Cart', JSON.stringify([]));
    }
    let storage = JSON.parse(localStorage.getItem('Cart')!);
    return storage;
  }
}
