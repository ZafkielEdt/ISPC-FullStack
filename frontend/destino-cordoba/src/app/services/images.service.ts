import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root",
})
export class ImagesService {
  constructor(private http: HttpClient) {}
  apiURL = "http://localhost:8000/";

	// "destinations/<int:destination_id>/images/"

	getDestinationImages(id:number) {
		return this.http.get<any[]>(this.apiURL+'destinations/images/'+id);
	}

	getExperienceImages(id:number) {
		return this.http.get<any[]>(this.apiURL+'experiences/images/'+id);
	}

	getAccommodationsImages(id:number) {
		return this.http.get<any[]>(this.apiURL+'accommodations/images/'+id);
	}


}