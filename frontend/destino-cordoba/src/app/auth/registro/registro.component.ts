import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { RegisterService } from '../service/register.service';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit, OnDestroy {
  formularioRegistro!: FormGroup;
  hide: boolean = true;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService
  ) {}
  ngOnInit(): void {
    this.formularioRegistro = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    });
    document.body.style.background =
      'url("./assets/img/fondo.svg") no-repeat fixed';
    document.body.style.backgroundSize = 'cover';
  }
  onSubmit(): void {
    if (this.formularioRegistro.valid) {
      this.registerService
        .registerUser(this.formularioRegistro.value as User)
        .subscribe((data) => {
        });
    }
  }

  ngOnDestroy(): void {
    document.body.style.background = 'none';
  }
}
