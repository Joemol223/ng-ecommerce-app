import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home').then(c => c.Home) },
  { path: 'products', loadComponent: () => import('./pages/products/products/products').then(c => c.Products) },
  { path: 'products/:id', loadComponent: () => import('./pages/products/product-detail/product-detail').then(c => c.ProductDetail) },
  { path: 'cart', loadComponent: () => import('./pages/cart/cart').then(c => c.Cart) },
  { path: 'login', loadComponent: () => import('./pages/auth/login/login').then(c => c.Login)},
  { path: 'register', loadComponent: () => import('./pages/auth/register/register').then(c => c.Register) },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}

