import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  constructor(private http: HttpClient) { }
  apiURL = 'http://localhost:3000';


  getPackages() {
    return this.http.get(this.apiURL+'packages');
  }
  packageA : any = {
    "id": 3,
    "startDate": "12312",
    "endDate": "12312",
    "totalPrice":123123,
    "destination":"",
    "experience":""
}

  setPackages() {
    return this.http.post(this.apiURL+'packages', this.packageA);
  }
}
