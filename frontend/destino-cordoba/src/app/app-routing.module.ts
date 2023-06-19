import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {DestinationsComponent} from "./components/destinations/destinations.component";
import {
    CartComponent,
    NotFoundComponent,
    PackageTravelComponent,
} from "./pages";
import {ResultadoBuscadorComponent} from "./pages/resultado-buscador/resultado-buscador.component";
import {AuthGuard} from "./auth/guard/auth.guard";
import {DashboardComponent} from "./pages";
import { CheckoutStatusComponent } from "./pages/checkout-status/checkout-status.component";

const routes: Routes = [
    {
        path: "",
        loadChildren: () => import("./pages").then((m) => m.HomeModule),
    },
    {
        path: "",
        loadChildren: () => import("./auth").then((m) => m.AuthModule),
    },
    {path: "paquete/:id", component: PackageTravelComponent},
    {path: "cards", component: DestinationsComponent},
    {path: "cart", component: CartComponent},
    {path: "search/:type/:destino", component: ResultadoBuscadorComponent},
    {path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
    {path: "payment/:status", component: CheckoutStatusComponent},
    {path: "**", component: NotFoundComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
