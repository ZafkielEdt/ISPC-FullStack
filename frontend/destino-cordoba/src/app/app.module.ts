import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

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
import { DashboardContainerComponent } from './components/admin-dashboard-components/dashboard-container/dashboard-container.component';
import { UserTabComponent } from './components/admin-dashboard-components/user-tab/user-tab.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PriceBoxComponent } from './pages/cart/price-box/price-box.component';

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
    PriceBoxComponent,
    DashboardContainerComponent,
    UserTabComponent,
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
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ,CookieService,
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
