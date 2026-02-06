import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../core/services/product';
import { CartService } from '../../../core/services/cart';
import { ProductModel } from '../../../core/models/product';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail implements OnInit {
  product?: ProductModel;
  quantity = 1;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    
    const p = this.productService.getProductById(id);
    if(p) {
      this.product = p;
    } else {
      console.error('Product not found');
    }
    this.isLoading = false;
  }

  increase() { if(this.quantity < 10) this.quantity++; }
  decrease() { if(this.quantity > 1) this.quantity--; }

  addToCart() { 
    if(this.product) {
      for(let i = 0; i < this.quantity; i++) {
        this.cartService.addToCart(this.product);
      }
    }
  }

  buyNow() { 
    this.addToCart(); 
    this.router.navigate(['/cart']); 
  }
}
