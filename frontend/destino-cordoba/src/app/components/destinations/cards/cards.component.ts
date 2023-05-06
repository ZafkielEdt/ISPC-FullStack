import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
image = 'https://images.hola.com/imagenes/viajes/20210915196086/praga-experiencias-ciudad-alrededores/0-994-736/panoramica-praga-m.jpg?tx=w_680';
name = 'Praga';
description = 'Republica checa';
rate = 4.7;
price  = 1999
@Input() path: string = "";

}
