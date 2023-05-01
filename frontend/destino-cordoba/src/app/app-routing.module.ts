import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';

import {PackageTravelComponent} from './components/travel-package/travel-package.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CardsComponent } from './components/destinations/cards/cards.component';

const routes: Routes = [
  {path:'',component : HomeComponent},
  { path: 'registro', component: RegistroComponent },
  {path : 'travel/:title', component: PackageTravelComponent },
  { path : 'user-dashboard', component: UserDashboardComponent},

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
