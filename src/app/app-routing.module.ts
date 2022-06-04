import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './models/components/home-page/home-page.component';
import { LoginFormComponent } from './models/components/login-form/login-form.component';
import { PageNotFoundComponent } from './models/components/page-not-found/page-not-found.component';

import { ShoppingCartComponent } from './models/components/shopping-cart/shopping-cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'cart', component: ShoppingCartComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
