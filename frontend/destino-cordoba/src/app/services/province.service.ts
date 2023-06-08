import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";
import {Province} from "../models/province";

@Injectable({
    providedIn: "root",
})
export class ProvinceService {
    provinceUrl: string = "http://localhost:8000/provinces";

    constructor(private http: HttpClient) {
    }

    getAll() {
        return this.http.get<any>(this.provinceUrl);
    }

    getBy(id?: number) {
        return this.http.get<any>(`${this.provinceUrl}/${id}`)
    }

    create(data: FormGroup) {
        return this.http.post(this.provinceUrl, data.value)
    }

    update(data: FormGroup, id?: number) {
        return this.http.put(`${this.provinceUrl}/${id}`, data.value)
    }

    deleteBy(id: number) {
        return this.http.delete(`${this.provinceUrl}/${id}`)
    }
}
