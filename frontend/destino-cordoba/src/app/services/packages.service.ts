import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PackageCard } from '../models/package-card';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) { }
  apiURL = 'http://localhost:3000/';


  getPackages() {
    return this.http.get<PackageCard[]>(this.apiURL+'packages');
  }
  setPackages(packageTravel : PackageCard) {
    return this.http.post(this.apiURL+'packages', packageTravel);
  }
}
