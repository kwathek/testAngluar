import { Component } from '@angular/core';
import {ApiService} from './api.service';
import {CustomerService} from './customer.service';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  email = 'peter@klaven';
  password = 'cityslicka';

  constructor(private api: ApiService, private customer: CustomerService, private router: Router, private authService: AuthService) {
  }

  tryLogin() {
    if (this.email === 'peter@klaven' && this.password === 'cityslicka') {
      this.authService.signIn();
      this.api.login(
        this.email,
        this.password
      )
        .subscribe(
          r => {
            if (r.token) {
              this.customer.setToken(r.token);
              this.router.navigateByUrl('/LoginComplete');
            }
          },
          r => {
            alert(r.error.error);
          });
    } else if (this.email !== 'peter@klaven' && this.password === 'cityslicka') {
      alert(' vérifier votre email !');
    } else if (this.email === 'peter@klaven' && this.password !== 'cityslicka') {
      alert(' vérifier votre mot de passe !');
    } else {
      alert(' vérifier votre email et mot de passe ');
    }
  }

}
