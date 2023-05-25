import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  // url: string = 'http://localhost:3000';
  url: string = 'http://localhost:8000/';

  registerUser(user: any) {
    return this.http.post('http://localhost:8000/users', user);
  }
}
