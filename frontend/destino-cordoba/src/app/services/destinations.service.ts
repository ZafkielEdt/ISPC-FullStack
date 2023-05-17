import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Destination {
  id: number;
  name: string;
  city: string;
  image: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class DestinationsService {
  constructor(private http: HttpClient) {}

  private destinationUrl: string = 'http://localhost:3000/destinations';

  getDestinations() {
    return this.http.get<Destination[]>(this.destinationUrl);
  }
}
