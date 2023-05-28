import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { City } from "../models/city";

export interface Destination {
	id: number;
	name: string;
	description: string;
	city: City;
}

@Injectable({
	providedIn: "root",
})
export class DestinationsService {
	constructor(private http: HttpClient) {}

	private destinationUrl: string = "http://localhost:8000/destinations";

	getDestinations() {
		return this.http.get<any>(this.destinationUrl);
	}
}
