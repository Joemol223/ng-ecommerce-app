import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductModel } from '../../core/models/product';
import { CartItem } from '../../core/models/cart-item';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable(); // ✅ observable for Cart component

  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable(); // ✅ observable for Navbar

  constructor() {
    const saved = localStorage.getItem('cart');
    if (saved) {
      this.cartItems = JSON.parse(saved);
      this.cartSubject.next(this.cartItems);
      this.cartCount.next(this.cartItems.reduce((acc, i) => acc + i.quantity, 0));
    }
  }

  addToCart(product: ProductModel, quantity: number = 1) {
    const existing = this.cartItems.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity += quantity;
      if (existing.quantity > 10) existing.quantity = 10; // max 10
    } else {
      this.cartItems.push({ product, quantity });
    }
    this.saveCart();
  }

  updateQuantity(productId: number, quantity: number) {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      item.quantity = Math.min(Math.max(1, quantity), 10); // min 1, max 10
      this.saveCart();
    }
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(i => i.product.id !== productId);
    this.saveCart();
  }

  getTotalPrice() {
    return this.cartItems.reduce((total, i) => total + i.product.price * i.quantity, 0);
  }

  clearCart() {
    this.cartItems = [];
    this.saveCart();
  }

  private saveCart() {
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
    this.cartCount.next(this.cartItems.reduce((acc, i) => acc + i.quantity, 0));
  }
}
