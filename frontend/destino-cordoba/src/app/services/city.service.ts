import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from '../models/search-options';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  cityUrl: string = 'http://localhost:8000/cities'

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(this.cityUrl)
  }

  getBy(name: string) {
    return this.http.get(`${this.cityUrl}/${name}`)
  }
}
