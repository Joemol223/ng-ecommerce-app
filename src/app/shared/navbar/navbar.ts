import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isMenuOpen = false;

  cartItemCount = 3; // placeholder, later connect to cart service

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
