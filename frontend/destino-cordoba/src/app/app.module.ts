import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PackageTravelComponent } from './components/travel-package/travel-package.component';
import { SharedModule } from './components/shared/shared.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { ModalComponent } from './components/travel-package/modal/modal.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

import { CardsComponent } from './components/destinations/cards/cards.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { CardWithButtonComponent } from './components/destinations/card-with-button/card-with-button.component';
import { CardWithTextComponent } from './components/destinations/card-with-text/card-with-text.component';
import { AuthModule } from './auth/auth.module';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    PackageTravelComponent,
    GalleryComponent,
    UserDashboardComponent,
    ModalComponent,
    HomeComponent,
    NotFoundComponent,
    CardsComponent,
    DestinationsComponent,
    CardWithButtonComponent,
    CardWithTextComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    SharedModule,
    AuthModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
