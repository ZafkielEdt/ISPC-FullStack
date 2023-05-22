import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BuscadorService } from 'src/app/services/buscador.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  formularioBuscador!: FormGroup;
  constructor(private fb: FormBuilder, private route: Router) {}
  ngOnInit(): void {
    this.formularioBuscador = this.fb.group({
      origen: ['', [Validators.required]],
      destino: ['', [Validators.required]],
    });
  }
  onSubmit(): void {
    if (this.formularioBuscador.valid) {
      this.route.navigate([
        'search/destination' + '/' + this.formularioBuscador.value.destino,
      ]);
    }
  }
  tabActive: number = 1;
  setActive(indice: number) {
    this.tabActive = indice;
  }
}
