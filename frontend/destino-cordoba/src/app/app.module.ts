import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {
    BrowserAnimationsModule,
    provideAnimations,
} from "@angular/platform-browser/animations";

import {LazyLoadImageModule} from "ng-lazyload-image";
import {GalleryComponent} from "./components/gallery/gallery.component";

import {MAT_DATE_LOCALE} from "@angular/material/core";
import {NotFoundComponent} from "./pages/not-found/";
import {AuthModule} from "./auth/auth.module";

import {BrowserModule} from "@angular/platform-browser";
import {CartComponent} from "./pages";
import {TravelerComponent} from "./pages/cart/traveler";
import {PaymentInfoComponent} from "./pages/cart/payment-info";
import {SharedModule} from "./shared";
import {ModalComponent, PackageTravelComponent} from "./pages/travel-package";
import {CookieService} from "ngx-cookie-service";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {PriceBoxComponent} from "./pages/cart/price-box/price-box.component";
import {ToastrModule, provideToastr} from "ngx-toastr";
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { TableContentComponent } from './components/table-content/table-content.component';
import {NgOptimizedImage} from "@angular/common";
import { FormsContentComponent } from './components/forms-content/forms-content.component';
import { ProvinceFormComponent } from './components/forms-content/province-form/province-form.component';
import { CityFormComponent } from './components/forms-content/city-form/city-form.component';

@NgModule({
    declarations: [
        AppComponent,
        PackageTravelComponent,
        GalleryComponent,
        ModalComponent,
        DashboardComponent,
        NotFoundComponent,
        CartComponent,
        TravelerComponent,
        PaymentInfoComponent,
        PriceBoxComponent,
        TableContentComponent,
        FormsContentComponent,
        ProvinceFormComponent,
        CityFormComponent,

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
        ToastrModule.forRoot(),
        NgOptimizedImage,
    ],
    providers: [
        {provide: MAT_DATE_LOCALE, useValue: "es-ES"},
        CookieService,
        {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
        provideAnimations(), // required animations providers
        provideToastr(),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
