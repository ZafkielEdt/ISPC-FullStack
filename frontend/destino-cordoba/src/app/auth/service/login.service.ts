import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  currentUser: BehaviorSubject<any>;
  constructor(private http: HttpClient) {
    this.currentUser = new BehaviorSubject<any>(
      sessionStorage.getItem('currentUser') || {}
    );
  }
  url: string = 'http://localhost:3000';
  getByEmail(email: string): Observable<any> {
    return this.http.get<any>(`${this.url}/users?email=${email}`);
  }
  login(credentials: any): Observable<any> {
    return this.http.get<boolean>(`${this.url}/users`, credentials).pipe(
      map((isLogged) => {
        if (isLogged) {
          sessionStorage.setItem('currentUser', JSON.stringify(credentials));
        }
        return isLogged;
      })
    );
  }
}
