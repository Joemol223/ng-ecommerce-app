import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;

  cartItemCount = 3; // placeholder, later connect to cart service

  
  user: any;   // ⭐ store logged-in user

  constructor(private auth: AuthService) {   // ⭐ inject service
    this.auth.user$.subscribe(u => this.user = u);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

    logout() {   // ⭐ logout method
    this.auth.logout();
  }
}
