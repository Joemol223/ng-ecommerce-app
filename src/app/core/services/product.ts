import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { id: 1, name: 'iPhone 15', price: 999, image: 'https://picsum.photos/300?1', category: 'Mobile' },
    { id: 2, name: 'MacBook Pro', price: 1999, image: 'https://picsum.photos/300?2', category: 'Laptop' },
    { id: 3, name: 'Headphones', price: 199, image: 'https://picsum.photos/300?3', category: 'Audio' },
    { id: 4, name: 'Smart Watch', price: 299, image: 'https://picsum.photos/300?4', category: 'Wearable' },
     { id: 5, name: 'iPhone 15', price: 999, image: 'https://picsum.photos/300?1', category: 'Mobile' },
    { id: 6, name: 'MacBook Pro', price: 1999, image: 'https://picsum.photos/300?2', category: 'Laptop' },
    { id: 7, name: 'Headphones', price: 199, image: 'https://picsum.photos/300?3', category: 'Audio' },
    { id: 8, name: 'Smart Watch', price: 299, image: 'https://picsum.photos/300?4', category: 'Wearable' },
     { id: 9, name: 'iPhone 15', price: 999, image: 'https://picsum.photos/300?1', category: 'Mobile' },
    { id: 10, name: 'MacBook Pro', price: 1999, image: 'https://picsum.photos/300?2', category: 'Laptop' },
    { id: 11, name: 'Headphones', price: 199, image: 'https://picsum.photos/300?3', category: 'Audio' },
    { id: 12, name: 'Smart Watch', price: 299, image: 'https://picsum.photos/300?4', category: 'Wearable' }
  ];

  getProducts(): Observable<any[]> {
    return of(this.products); // simulating API
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
