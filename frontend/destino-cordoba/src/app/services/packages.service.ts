import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PackageCard } from '../models/package-card';
import { Package } from '../models/package';
@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) { }
  apiURL = 'http://localhost:8000/';


  getPackages() {
    return this.http.get<Package[]>(this.apiURL+'packages');
  }
  getPackageById(id : number) {
    return this.http.get<Package>(this.apiURL+'packages/'+id);
  }
  setPackages(packageTravel : PackageCard) {
    return this.http.post(this.apiURL+'packages', packageTravel);
  }
}
