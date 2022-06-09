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
    storage = JSON.parse(localStorage.getItem('Products') || 'Empty storage');
    return storage;
  }

  setProducts(id: string) {
    if(!localStorage.getItem('Cart')) {
      localStorage.setItem('Cart', JSON.stringify([]));
    }
    let storage = JSON.parse(localStorage.getItem('Cart') || 'Empty cart');
    for(let i = 0; i <= storage.length; i++) {
      if(id == storage[i].id) {
        storage[i].count++;
      }
      storage.push({id: id, count: 1});
    }
    return localStorage.setItem('Cart', JSON.stringify(storage));
  }

  getCount() {
    if(!localStorage.getItem('Cart')) {
      return 0;
    } else {
      let storage = JSON.parse(localStorage.getItem('Cart') || 'Empty cart');
      return storage.length;
    }
  }

  getCart() {
    if(!localStorage.getItem('Cart')) {
      localStorage.setItem('Cart', JSON.stringify([]));
    }
    let storage = JSON.parse(localStorage.getItem('Cart') || 'Empty cart');
    return storage;
  }

  getCurrentCount() {
    if(!localStorage.getItem('Cart')) {
      localStorage.setItem('Cart', JSON.stringify([]));
    }
    let storage = JSON.parse(localStorage.getItem('Cart') || 'Empty cart');
    return storage;
  }
}
