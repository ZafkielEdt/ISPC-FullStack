import { Component } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  tabActive: number = 1;
  setActive(indice: number) {
    this.tabActive = indice;
  }
}
