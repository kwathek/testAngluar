import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LoginModule} from './login/login.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { LoginPage2Component } from './login-page2/login-page2.component';
import {ScrollEventModule} from 'ngx-scroll-event';
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'LoginComplete',
    component: LoginPage2Component
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPage2Component,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    ScrollEventModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
