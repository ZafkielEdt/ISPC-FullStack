import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3000';
  getUsers() {
    return this.http.get(this.url + '/users');
  }
}
