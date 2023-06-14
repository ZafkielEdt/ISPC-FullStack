import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';
import {FormGroup} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    private userUrl: string = 'http://localhost:8000/users';

    getAll() {
        return this.http.get<any>(this.userUrl);
    }

    getBy(id: number) {
        return this.http.get<any>(`${this.userUrl}/${id}`)
    }

    create(user: FormGroup) {
        return this.http.post(`${this.userUrl}`, user.value)
    }

    update(user: FormGroup, id?: number) {
        return this.http.put<User>(`${this.userUrl}/${id}`, user.value)
    }

    deleteBy(id: number) {
        return this.http.delete<User>(`${this.userUrl}/${id}`)
    }
}
