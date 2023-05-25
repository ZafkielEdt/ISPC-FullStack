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
      this.serviceLogin.login(this.formularioLogin.value).subscribe({
      error: err => {
        throw err;
      },
      complete: () => {
        this.router.navigate(['/']);
    }})
  }
  }

  ngOnDestroy(): void {
    document.body.style.background = 'none';
  }

}
