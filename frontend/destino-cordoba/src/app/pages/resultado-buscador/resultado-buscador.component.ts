import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BuscadorService } from 'src/app/services/buscador.service';

@Component({
  selector: 'app-resultado-buscador',
  templateUrl: './resultado-buscador.component.html',
  styleUrls: ['./resultado-buscador.component.css'],
})
export class ResultadoBuscadorComponent implements OnInit {
  destino!: string;
  resultados!: any[];
  isFound: boolean = false;
  constructor(
    private route: ActivatedRoute,
    private service: BuscadorService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const type = params['type'];
      const destino = params['destino'];
      this.destino = destino;
    });
    this.service.getByDestino(this.destino).subscribe((res: any[]) => {
      this.resultados = res;
      if (res.length > 0) {
        this.isFound = true;
      }
    });
  }
}
