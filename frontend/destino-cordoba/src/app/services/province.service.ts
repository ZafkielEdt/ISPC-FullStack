import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ProvinceService {
  provinceUrl: string = "http://localhost:8000/provinces";

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<any>(this.provinceUrl);
  }

  deleteBy(id: number) {
    return this.http.delete(`${this.provinceUrl}/${id}`)
  }
}
