import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  formularioRegistro!: FormGroup;
  hide: boolean = true;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.formularioRegistro = this.fb.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required]],
      checkbox: ['', Validators.required],
    });

    this.route.url.subscribe((url) => {
      if (url[0].path === 'registro') {
        document.body.style.background =
          'url("./assets/img/fondo.svg") no-repeat fixed';
        document.body.style.backgroundSize = 'cover';
        this.agregarClases(
          document.querySelector('nav'),
          document.querySelector('footer')
        );
      }
    });
  }
  onSubmit(): void {
    console.log(this.formularioRegistro.get('checkbox')?.value);
  }
  agregarClases(...ele: any[]) {
    ele.forEach((element) => {
      element.classList.add('is-login');
    });
  }
  quitarClases(...ele: any[]) {
    ele.forEach((element) => {
      element.classList.remove('is-login');
    });
  }
}
