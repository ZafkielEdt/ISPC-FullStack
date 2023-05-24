import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegistroComponent
  ],
  providers: [ CookieService]

})
export class AuthModule { }
