import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../models/product';
import { CartItem } from '../models/cart-item';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartSubject = new BehaviorSubject<CartItem[]>(this.loadCart());
  cart$ = this.cartSubject.asObservable();

  constructor() {}

  getCart(): CartItem[] { return this.cartSubject.value; }

  addToCart(product: ProductModel) {
    const cart = this.getCart();
    const item = cart.find(i => i.product.id === product.id);
    if (item) {
      if (item.quantity < 10) item.quantity++;
    } else {
      cart.push({ product, quantity: 1 });
    }
    this.updateCart(cart);
  }

  updateQuantity(productId: number, quantity: number) {
    const cart = this.getCart();
    const item = cart.find(i => i.product.id === productId);
    if (item && quantity >= 1 && quantity <= 10) item.quantity = quantity;
    this.updateCart(cart);
  }

  removeFromCart(productId: number) {
    const cart = this.getCart().filter(i => i.product.id !== productId);
    this.updateCart(cart);
  }

  clearCart() { this.updateCart([]); }

  getTotalPrice(): number {
    return this.getCart().reduce((t, i) => t + i.product.price * i.quantity, 0);
  }

  getTotalQuantity(): number {
    return this.getCart().reduce((t, i) => t + i.quantity, 0);
  }

  private updateCart(cart: CartItem[]) {
    this.cartSubject.next([...cart]);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  private loadCart(): CartItem[] {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
  }
}
