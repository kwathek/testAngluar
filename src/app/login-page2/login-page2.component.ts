import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-page2',
  templateUrl: './login-page2.component.html',
  styleUrls: ['./login-page2.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginPage2Component implements OnInit {
  disabled = 'true';
  marked = 'false';
  constructor(private router: Router) { }

  ngOnInit() {
  }
  // vérification si le checkbox est checked
  toggleVisibility(e) {
    this.marked = e.target.checked;
  }
  // Listener qui verifie le Scroll
  public handleScroll(event: ScrollEvent) {
    if (event.isReachingBottom) {
      console.log(`the user is reaching the bottom`);
      this.disabled = 'false';
    }
  }
  // validation et navigation vers une autre page
  valider() {
    this.router.navigateByUrl('/Acceuil');
  }
  retour() {
    this.router.navigateByUrl('/');
  }
}
