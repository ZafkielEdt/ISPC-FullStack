import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root",
})
export class ExperiencesService {
	constructor(private http: HttpClient) {}

	private experienceUrl: string = "http://localhost:8000/experiences";

	getDestinations() {
		return this.http.get<any>(this.experienceUrl);
	}
}
