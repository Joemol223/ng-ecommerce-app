import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../core/services/product';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit{
 product: any;
  loading = true;
  quantity = 1; // default quantity

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProductById(id);
    this.loading = false;
  }

  increaseQuantity() {
    if (this.quantity < 10) this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  addToCart() {
    alert(`${this.quantity} x ${this.product.name} added to cart!`);
    // TODO: Connect to CartService
  }

  buyNow() {
    alert(`Buying ${this.quantity} x ${this.product.name} now!`);
    // TODO: Redirect to checkout page
  }
}
