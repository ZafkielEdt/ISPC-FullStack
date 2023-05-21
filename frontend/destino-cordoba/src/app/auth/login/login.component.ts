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
  userCredentials!: LoginRequest;
  constructor(
    private fb: FormBuilder,
    private serviceLogin: LoginService,
    private router: Router
  ) { }
  ngOnInit(): void {
    this.formularioLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.formularioLogin.valid) {
      this.userCredentials = {
        email: this.formularioLogin.get('email')?.value,
        password: this.formularioLogin.get('password')?.value
      };
      console.log(this.userCredentials.email)

      this.serviceLogin.getByEmail(this.userCredentials.email).subscribe({
        next:(data) => {
          console.log(data) // [] 
          this.loggedUser = data;
  
          if (this.loggedUser.password === this.userCredentials.password) {
            sessionStorage.setItem('currentUser', JSON.stringify(this.loggedUser));
            this.serviceLogin.isLoggedIn.next(true);
            this.serviceLogin.currentUser.next(this.loggedUser);

          }
      }, 
      error: (err) => {
        console.log(err)
      }, 
      complete: () => {
          this.router.navigate(['/']);

      }});

    }
  }

  ngOnDestroy(): void {
    document.body.style.background = 'none';
  }
}

