import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product';
import { CartService } from '../../../core/services/cart';
import { ProductModel } from '../../../core/models/product';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrls: ['./product-detail.css']
})
export class ProductDetail implements OnInit {
  product!: ProductModel;
  quantity = 1;
  maxQuantity = 10;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    const p = this.productService.getProductById(id);
    if (p) {
      this.product = p;
    }
    this.isLoading = false;
  }

  increase() {
    if (this.quantity < this.maxQuantity) this.quantity++;
  }

  decrease() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    for (let i = 0; i < this.quantity; i++) {
      this.cartService.addToCart(this.product);
    }
    alert(`${this.quantity} item(s) added to cart!`);
  }

  buyNow() {
    this.addToCart();
    this.router.navigate(['/cart']);
  }
}
