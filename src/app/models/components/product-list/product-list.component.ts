import { Component, OnInit } from '@angular/core';

import { PRODUCTS } from './data';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = PRODUCTS;
  // let cart;

  constructor() {

 }

  ngOnInit(): void {
  }

  addToCart(product: Object) {
    // cart.push(product)
  }

}
