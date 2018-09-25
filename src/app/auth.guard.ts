import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './login/auth.service';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {CustomerService} from './login/customer.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router, private customer: CustomerService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if ( this.authService.isAuth || this.customer.isLogged()) {
      return true;
    } else {
      this.router.navigateByUrl('login');
    }
  }
}
