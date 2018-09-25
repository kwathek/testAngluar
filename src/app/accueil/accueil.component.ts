import { Component, OnInit } from '@angular/core';
import {ApiService} from '../login/api.service';
import {CustomerService} from '../login/customer.service';
import {Router} from '@angular/router';
import {AuthService} from '../login/auth.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private api: ApiService, private customer: CustomerService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  signOut() {
    this.authService.signOut();
    this.customer.isLoggedOut();
    this.router.navigateByUrl('/login');
  }

}
