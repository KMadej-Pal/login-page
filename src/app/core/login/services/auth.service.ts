import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly AUTH_TOKEN = 'token';

  constructor(private router: Router){}

  login(): boolean {
    const token = Math.random().toString(36).substring(2);
    localStorage.setItem(this.AUTH_TOKEN, token);
    return true;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(this.AUTH_TOKEN) !== null;
  }

  logout(): void {
    localStorage.removeItem(this.AUTH_TOKEN);
    this.router.navigate(['/login']); 
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.AUTH_TOKEN);
  }
}
