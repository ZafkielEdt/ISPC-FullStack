import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { CartComponent,NotFoundComponent, PackageTravelComponent } from './pages';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages').then(m => m.HomeModule) },
  { path: '', loadChildren: () => import('./auth').then(m => m.AuthModule) },
  {path : 'travel/:title', component: PackageTravelComponent },
  { path : 'user-dashboard', component: UserDashboardComponent},
  { path : 'cards', component: DestinationsComponent},
  {path : 'cart' , component : CartComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
