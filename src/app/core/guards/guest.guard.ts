import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private authSvc: AuthService, private router: Router) {}
  canActivate(): boolean {
    if (!this.authSvc.isSignedIn()) {
      return true;
    } else {
      this.router.navigate(['/dashboard']);
      return true;
    }
  }
}
