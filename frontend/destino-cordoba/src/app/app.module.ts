import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LazyLoadImageModule } from 'ng-lazyload-image';
import { GalleryComponent } from './components/gallery/gallery.component';
import { UserDashboardComponent } from './pages/user-dashboard/';

import { MAT_DATE_LOCALE } from '@angular/material/core';
import { NotFoundComponent } from './pages/not-found/';
import { AuthModule } from './auth/auth.module';

import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './pages';
import { TravelerComponent } from './pages/cart/traveler';
import { PaymentInfoComponent } from './pages/cart/payment-info';
import { SharedModule } from './shared';
import { ModalComponent, PackageTravelComponent } from './pages/travel-package';
import {CookieService} from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    PackageTravelComponent,
    GalleryComponent,
    UserDashboardComponent,
    ModalComponent,
    NotFoundComponent,
    CartComponent,
    TravelerComponent,
    PaymentInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LazyLoadImageModule,
    SharedModule,
    AuthModule,
    HttpClientModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' },CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
