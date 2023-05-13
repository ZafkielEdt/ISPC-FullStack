import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor(private http: HttpClient) { }

  private pathUrl: string = "http://localhost:3000/destinations"

  getDestinations() {
    return this.http.get(this.pathUrl+'destinations')
  }
}
