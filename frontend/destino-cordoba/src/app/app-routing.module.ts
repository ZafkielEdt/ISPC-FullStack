import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PackageTravelComponent} from './components/travel-package/travel-package.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DestinationsComponent } from './components/destinations/destinations.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';

const routes: Routes = [
  {path:'',component : HomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  {path : 'travel/:title', component: PackageTravelComponent },
  { path : 'user-dashboard', component: UserDashboardComponent},
  { path : 'cards', component: DestinationsComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
