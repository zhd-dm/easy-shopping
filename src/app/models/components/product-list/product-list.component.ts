import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/types';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {



  constructor(
    private producter: CartService
  ) {

 }

 products: IProduct[] = [];

  ngOnInit(): void {
    this.products = this.producter.getAllProducts();
  }

  addToCart(art: string) {
    console.log(art)
    this.producter.setProducts(art);
  }

}
