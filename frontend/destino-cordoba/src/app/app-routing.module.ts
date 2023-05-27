import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { DestinationUpdateDetailsComponent } from './components/admin-dashboard-components/destination-tab/destination-update-details/destination-update-details.component';
import { DestinationCreationFormComponent } from './components/admin-dashboard-components/destination-tab/destination-creation-form/destination-creation-form.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import {
  CartComponent,
  NotFoundComponent,
  PackageTravelComponent,
} from './pages';
import { ResultadoBuscadorComponent } from './pages/resultado-buscador/resultado-buscador.component';
import { AuthGuard } from './auth/guard/auth.guard';


const routes: Routes = [
  { path: '', loadChildren: () => import('./pages').then((m) => m.HomeModule) },
  { path: '', loadChildren: () => import('./auth').then((m) => m.AuthModule) },
  { path: 'travel/:title', component: PackageTravelComponent },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuard]},
  {path: 'user-dashboard/destinations/:destinationId', component: DestinationUpdateDetailsComponent},
  {path: 'user-dashboard/destination/new-destination', component: DestinationCreationFormComponent},
  { path: 'cards', component: DestinationsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'search/:type/:destino', component: ResultadoBuscadorComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
