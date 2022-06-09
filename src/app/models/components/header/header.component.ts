import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count: number = 0;

  constructor(
    private carterer: CartService
  ) { }



  ngOnInit(): void {
    this.count = this.carterer.getCount();
  }

}
