import { Component, Input } from '@angular/core';
import { Destination } from 'src/app/services/destinations.service';

@Component({
  selector: 'app-card-with-text',
  templateUrl: './card-with-text.component.html',
  styleUrls: ['./card-with-text.component.css']
})
export class CardWithTextComponent {
//image = 'https://cdn.culturagenial.com/es/imagenes/2915110-taj-mahal-1000-1464523250-cke.jpg'
@Input() path: string = "";
@Input() destination!: Destination;
}
