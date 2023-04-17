import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent {
  nombre = new FormControl('');
  apellido = new FormControl('');
  email = new FormControl('');
  contrasena = new FormControl('');
}
