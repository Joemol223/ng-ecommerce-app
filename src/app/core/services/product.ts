import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products = [
    { id: 1, name: 'iPhone 15', price: 999, image: 'https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg', category: 'Mobile' },
    { id: 2, name: 'MacBook Pro', price: 1999, image: 'https://images.pexels.com/photos/8532945/pexels-photo-8532945.jpeg', category: 'Laptop' },
    { id: 3, name: 'Headphones', price: 199, image: 'https://images.pexels.com/photos/30428606/pexels-photo-30428606.jpeg', category: 'Audio' },
    { id: 4, name: 'Smart Watch', price: 299, image: 'https://images.pexels.com/photos/5083218/pexels-photo-5083218.jpeg', category: 'Wearable' },
     { id: 5, name: 'iPhone 15', price: 999, image: 'https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg', category: 'Mobile' },
    { id: 6, name: 'MacBook Pro', price: 1999, image: 'https://images.pexels.com/photos/8532945/pexels-photo-8532945.jpeg', category: 'Laptop' },
    { id: 7, name: 'Headphones', price: 199, image: 'https://images.pexels.com/photos/30428606/pexels-photo-30428606.jpeg', category: 'Audio' },
    { id: 8, name: 'Smart Watch', price: 299, image: 'https://images.pexels.com/photos/5083218/pexels-photo-5083218.jpeg', category: 'Wearable' },
     { id: 9, name: 'iPhone 15', price: 999, image: 'https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg', category: 'Mobile' },
    { id: 10, name: 'MacBook Pro', price: 1999, image: 'https://images.pexels.com/photos/8532945/pexels-photo-8532945.jpeg', category: 'Laptop' },
    { id: 11, name: 'Headphones', price: 199, image: 'https://images.pexels.com/photos/30428606/pexels-photo-30428606.jpeg', category: 'Audio' },
    { id: 12, name: 'Smart Watch', price: 299, image: 'https://images.pexels.com/photos/5083218/pexels-photo-5083218.jpeg', category: 'Wearable' }
  ];

  getProducts(): Observable<any[]> {
    return of(this.products); // simulating API
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}
