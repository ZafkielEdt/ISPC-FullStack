import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

import {
    BrowserAnimationsModule,
    provideAnimations,
} from "@angular/platform-browser/animations";

import {LazyLoadImageModule} from "ng-lazyload-image";
import {GalleryComponent} from "./components/gallery/gallery.component";

import {MAT_DATE_LOCALE} from "@angular/material/core";
import {AuthModule} from "./auth/auth.module";
import {NotFoundComponent} from "./pages/not-found/";

import {NgOptimizedImage} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {CookieService} from "ngx-cookie-service";
import {ToastrModule, provideToastr} from "ngx-toastr";
import {AuthInterceptor} from "./auth/auth.interceptor";
import {CityFormComponent} from './components/forms/city-form/city-form.component';
import {ProvinceFormComponent} from './components/forms/province-form/province-form.component';
import {CartComponent} from "./pages";
import {PaymentInfoComponent} from "./pages/cart/payment-info";
import {PriceBoxComponent} from "./pages/cart/price-box/price-box.component";
import {TravelerComponent} from "./pages/cart/traveler";
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ModalComponent, PackageTravelComponent} from "./pages/travel-package";
import {SharedModule} from "./shared";
import {CheckoutStatusComponent} from './pages/checkout-status/checkout-status.component';
import {UserFormComponent} from './components/forms/user-form/user-form.component';
import {DestinationFormComponent} from './components/forms/destination-form/destination-form.component';
import {PackagesFormComponent} from "./components/forms/packages-form/packages-form.component";
import {TablesComponent} from './components/tables/tables.component';
import {TableDetailsComponent} from './components/tables/table-details/table-details.component';
import { FormsComponent } from './components/forms/forms.component';

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
        ProvinceFormComponent,
        CityFormComponent,
        CheckoutStatusComponent,
        PackagesFormComponent,
        UserFormComponent,
        DestinationFormComponent,
        TablesComponent,
        TableDetailsComponent,
        FormsComponent,

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
export class AppModule {
}
