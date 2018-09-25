import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginModule} from './login/login.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { LoginPage2Component } from './login-page2/login-page2.component';
import {ScrollEventModule} from 'ngx-scroll-event';
import {AuthGuard} from './auth.guard';
import {AuthService} from './login/auth.service';
import { AccueilComponent } from './accueil/accueil.component';
const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'LoginComplete',
    canActivate: [AuthGuard],
    component: LoginPage2Component
  },
  {
    path: 'Acceuil',
    canActivate: [AuthGuard],
    component: AccueilComponent
  },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: 'Acceuil' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPage2Component,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ScrollEventModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
