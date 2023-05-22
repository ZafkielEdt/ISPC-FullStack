import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    currentUser: BehaviorSubject<User>;
    isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private http: HttpClient) {
        const storedUser = sessionStorage.getItem('currentUser');
        this.currentUser = new BehaviorSubject<User>(
            storedUser ? JSON.parse(storedUser) : {}
        );
    }
    url: string = 'http://localhost:3000';
    islogged() {
        return sessionStorage.getItem('currentUser') !== null;
    }
    getByEmail(email: string): Observable<User> {
        return this.http
            .get<User[]>(`${this.url}/user?email=${email}`)
            .pipe(map((users) => users[0]));
    }
    getCurrentUser(): any {
        return this.currentUser.value;
    }
    logout(): void {
        sessionStorage.removeItem('currentUser');
        this.isLoggedIn.next(false);
        location.reload();
    }
}
