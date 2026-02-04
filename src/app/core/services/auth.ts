import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {   // ⭐ MUST be class

  private userSubject = new BehaviorSubject<any>(this.getUserFromStorage());
  user$ = this.userSubject.asObservable();

  register(userData: any) {
    localStorage.setItem('registeredUser', JSON.stringify(userData));
  }

  login(email: string, password: string) {
    const savedUser = JSON.parse(localStorage.getItem('registeredUser') || 'null');

    if (savedUser && savedUser.email === email && savedUser.password === password) {
           localStorage.setItem('user', JSON.stringify(savedUser)); // session
      this.userSubject.next(savedUser);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }

  private getUserFromStorage() {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

    isLoggedIn(): boolean {
    return !!this.userSubject.value;
  }
}
