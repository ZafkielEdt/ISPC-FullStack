import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Province } from "../models/province";
import { FormGroup } from "@angular/forms";

export interface City {
  id: number;
  name: string;
  lat: number;
  lon: number;
  province: Province;
}

@Injectable({
  providedIn: "root",
})
export class CityService {
  cityUrl: string = "http://localhost:8000/cities";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.cityUrl);
  }

  getBy(name: string) {
    return this.http.get(`${this.cityUrl}/${name}`);
  }

  create(city: object) {
    return this.http.post(this.cityUrl, city);
  }
}
