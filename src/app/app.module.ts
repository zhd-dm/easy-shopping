import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './models/components/header/header.component';
import { FooterComponent } from './models/components/footer/footer.component';
import { ProductCardComponent } from './models/components/product-card/product-card.component';
import { ShoppingCartComponent } from './models/components/shopping-cart/shopping-cart.component';
import { HomePageComponent } from './models/components/home-page/home-page.component';
import { StorageComponent } from './models/components/storage/storage.component';
import { ProductListComponent } from './models/components/product-list/product-list.component';
import { PageNotFoundComponent } from './models/components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    ShoppingCartComponent,
    HomePageComponent,
    StorageComponent,
    ProductListComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
