import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CardsComponent } from 'src/app/components/destinations/cards/cards.component';
import { DestinationsComponent } from 'src/app/components/destinations/destinations.component';
import { CardWithButtonComponent } from 'src/app/components/destinations/card-with-button/card-with-button.component';
import { CardWithTextComponent } from 'src/app/components/destinations/card-with-text/card-with-text.component';
import { SharedModule } from 'src/app/shared';
import { BuscadorComponent } from 'src/app/components/buscador/buscador.component';

@NgModule({
  declarations: [
    HomeComponent,
    CardsComponent,
    DestinationsComponent,
    CardWithButtonComponent,
    CardWithTextComponent,
    BuscadorComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
