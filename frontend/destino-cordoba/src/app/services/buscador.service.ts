import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class BuscadorService {
	constructor(private http: HttpClient) {}
	url: string = "http://localhost:8000";
	getByDestino(destino: string): Observable<any> {
		return this.http.get<any>(`${this.url}/destinations?name=${destino}`);
	}

	getOrigins(): Observable<any> {
		return this.http.get<any>("/assets/data/origins.json");
	}
	getDestinations(): Observable<any> {
		return this.http.get<any>(this.url + "/destinations");
	}
}
