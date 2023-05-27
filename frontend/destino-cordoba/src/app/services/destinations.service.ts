import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormGroup } from "@angular/forms";

interface City {
  name: string;
}

export interface Destination {
  id: number;
  name: string;
  city: City;
  image: string;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class DestinationsService {
  constructor(private http: HttpClient) {}

  private destinationUrl: string = "http://localhost:3000/destinations";

  getAll() {
    return this.http.get<Destination[]>(this.destinationUrl);
  }

  getBy(id: number) {
    return this.http.get<Destination>(`${this.destinationUrl}/${id}`);
  }

  post(destination: FormGroup) {
    return this.http.post(this.destinationUrl, destination.value)
  }

  update(destination: FormGroup, id: number) {
    return this.http.put(`${this.destinationUrl}/${id}`, destination.value);
  }

  deleteBy(id: number) {
    return this.http.delete(`${this.destinationUrl}/${id}`);
  }
}
