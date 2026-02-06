import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../core/services/product';
import { CartService } from '../../../core/services/cart';
import { ProductModel } from '../../../core/models/product';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class Products implements OnInit {
  products: ProductModel[] = [];
  filteredProducts: ProductModel[] = [];
  categories: string[] = [];
  selectedCategory: string = 'All';
  isLoading = true;

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.filteredProducts = data;

        // Extract unique categories for filter
        this.categories = Array.from(new Set(data.map(p => p.category)));
        this.categories.unshift('All'); // Add "All" option
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to load products', err);
        this.isLoading = false;
      }
    });
  }

  filterCategory(category: string) {
    this.selectedCategory = category;
    if (category === 'All') {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(p => p.category === category);
    }
  }

  addToCart(p: ProductModel) { this.cartService.addToCart(p); }

  buyNow(p: ProductModel) { 
    this.cartService.addToCart(p); 
    this.router.navigate(['/cart']); 
  }
}
