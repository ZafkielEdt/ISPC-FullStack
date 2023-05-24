import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { LoginService } from '../service/login.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export interface LoginRequest {
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formularioLogin!: FormGroup;
  hide: boolean = true;
  rememberColor: ThemePalette = 'primary';
  loggedUser!: User;
  userCredentials!: LoginRequest;
  constructor(
    private fb: FormBuilder,
    private serviceLogin: LoginService,
    private router: Router,
    private cookie: CookieService
  ) { }
  ngOnInit(): void {
    this.formularioLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.formularioLogin.valid) {
      this.userCredentials = {
        username: this.formularioLogin.get('username')?.value,
        password: this.formularioLogin.get('password')?.value
      };
      console.log(this.userCredentials.username)
      this.serviceLogin.login(this.userCredentials).subscribe({
        next: (data:any) => {
          this.loggedUser = data;
          this.cookie.set('currentUser', JSON.stringify(this.loggedUser), 1);
          this.serviceLogin.isLoggedIn.next(true);
          this.serviceLogin.currentUser.next(this.loggedUser);
      },
      error: (err:any) => {
        console.log(err);
      }, 
      complete: () => {this.router.navigate(['/']);}
    });

    }
  }

  ngOnDestroy(): void {
    document.body.style.background = 'none';
  }
}

