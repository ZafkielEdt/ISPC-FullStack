import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    currentUser: BehaviorSubject<User>;
    isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    constructor(private http: HttpClient,private cookie : CookieService) {
        const storedUser = this.cookie.get('currentUser');
        this.currentUser = new BehaviorSubject<User>(
            storedUser ? JSON.parse(storedUser) : {}
        );
    }
    url: string = 'http://localhost:3000';
    islogged() {
        const storedUser = this.cookie.get('currentUser');
        return storedUser !== '' && storedUser !== null;
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
        this.cookie.delete('currentUser');
        this.isLoggedIn.next(false);
        location.reload();
    }
    login(user:any) : Observable<any>{

        return this.http.post('http://localhost:8000/login', user);
    }
}
