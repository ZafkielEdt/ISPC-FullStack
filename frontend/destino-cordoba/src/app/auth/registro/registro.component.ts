import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit, OnDestroy {
  formularioRegistro!: FormGroup;
  hide: boolean = true;
  
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.formularioRegistro = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
      checkbox: ['', Validators.required],
    });
    document.body.style.background = 'url("./assets/img/fondo.svg") no-repeat fixed';
    document.body.style.backgroundSize = 'cover';
  }
  onSubmit(): void {
    console.log(this.formularioRegistro.get('checkbox')?.value);
  }

  ngOnDestroy(): void {
    document.body.style.background = 'none'
  }
}
