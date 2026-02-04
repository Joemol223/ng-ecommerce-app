import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Example featured products (for now static, later can fetch from API)
featuredProducts = [
    { 
      id: 1, 
      name: 'Classic White T-Shirt', 
      price: 25, 
      image: 'https://images.pexels.com/photos/18257675/pexels-photo-18257675.jpeg',
      description: 'Comfortable cotton t-shirt, perfect for everyday wear.'
    },
    { 
      id: 2, 
      name: 'Leather Shoes', 
      price: 120, 
      image: 'https://images.pexels.com/photos/6764994/pexels-photo-6764994.jpeg',
      description: 'Premium leather shoes for style and comfort.'
    },
    { 
      id: 3, 
      name: 'Modern Watch', 
      price: 180, 
      image: 'https://images.pexels.com/photos/3829441/pexels-photo-3829441.jpeg',
      description: 'Stylish watch to complete your look.'
    },
        { 
      id: 4, 
      name: 'Designer Sunglasses', 
      price: 95, 
      image: 'https://images.pexels.com/photos/32677238/pexels-photo-32677238.jpeg',
      description: 'Elegant sunglasses for sunny days.'
    }
  ];

  categories = [
    { name: 'Clothing', image: 'https://images.pexels.com/photos/6461325/pexels-photo-6461325.jpeg' },
    { name: 'Electronics', image: 'https://images.pexels.com/photos/5054347/pexels-photo-5054347.jpeg' },
    { name: 'Accessories', image: 'https://images.pexels.com/photos/949590/pexels-photo-949590.jpeg' },
    { name: 'Shoes', image: 'https://images.pexels.com/photos/267301/pexels-photo-267301.jpeg' }
  ];
}
