import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { LoginService } from '../service/login.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

export interface LoginRequest {
  email: string;
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
  user!: LoginRequest;
  constructor(
    private fb: FormBuilder,
    private serviceLogin: LoginService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.formularioLogin.valid) {
      this.user = {
        email: this.formularioLogin.value.email,
        password: this.formularioLogin.value.password,
      };
      console.log(this.user);
      this.serviceLogin.getByEmail(this.user.email).subscribe((res) => {
        if (res.user.email !== undefined) {
          this.serviceLogin.login(this.user).subscribe((res) => {
            console.log(res);
          });
        } else {
          console.log('El usuario no existe');
        }
      });
    }
  }

  ngOnDestroy(): void {
    document.body.style.background = 'none';
  }
}
