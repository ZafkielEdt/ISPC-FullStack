import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {FormGroup} from "@angular/forms";

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

    create(data: FormGroup) {
        return this.http.post(this.provinceUrl, data.value)
    }

    deleteBy(id: number) {
        return this.http.delete(`${this.provinceUrl}/${id}`)
    }
}
