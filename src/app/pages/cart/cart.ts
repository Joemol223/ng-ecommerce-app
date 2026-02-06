import { Component, OnInit } from '@angular/core';
import { CartService } from '../../core/services/cart';
import { CartItem } from '../../core/models/cart-item';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.html'
})
export class Cart implements OnInit {
  cart: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(data => this.cart = data);
  }

  increase(item: CartItem) { this.cartService.updateQuantity(item.product.id, item.quantity + 1); }
  decrease(item: CartItem) { this.cartService.updateQuantity(item.product.id, item.quantity - 1); }
  remove(item: CartItem) { this.cartService.removeFromCart(item.product.id); }
  getTotal() { return this.cartService.getTotalPrice(); }
}
