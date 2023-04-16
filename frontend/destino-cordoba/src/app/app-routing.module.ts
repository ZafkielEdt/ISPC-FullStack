import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PackageTravelComponent} from './components/package-travel/package-travel.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path : 'travel/:title', component: PackageTravelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
