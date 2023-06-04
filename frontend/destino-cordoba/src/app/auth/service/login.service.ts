import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { User } from 'src/app/models/user';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    private currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>({} as User);
    constructor(private http: HttpClient,private cookie : CookieService) {
        const token = this.cookie.get('token');
        if (token) {
            const decoded: any = jwt_decode(token);
            this.getUserByUsername(decoded.username).subscribe({
              next: (user:User)=> {
                this.setCurrentUser(user);
              },
              error: (err:any) => {
                console.log('Error retrieving user:', err);
              }}
            );
          }
        }
    
    getUserByUsername(username: string): Observable<User> {
        return this.http.get<User>("http://localhost:8000/users/username/" + username);
    }
    islogged() {
        const token = this.cookie.get('token');
        return token !== '' && token !== null;
    }

    getCurrentUser(): Observable<User> {
        return this.currentUserSubject.asObservable();
    }
    setCurrentUser(user: User):void{
        this.currentUserSubject.next(user);
    } 
    logout(): void {
        this.cookie.delete('token');
        this.cookie.delete('refresh_token');
        this.currentUserSubject.next({} as User);
        location.reload();
    }  
    login(user: any): Observable<any> {
        return this.http.post('http://localhost:8000/api/token/', user).pipe(
          switchMap((res: any) => {
            this.cookie.set('token', res.access);
            this.cookie.set('refresh_token', res.refresh);
            const decoded: any = jwt_decode(res.access);
            return this.getUserByUsername(decoded.username).pipe(
              tap((user: User) => {
                this.setCurrentUser(user);
              })
            );
          })
        );
      }

    refreshToken(refresh:string): Observable<any> {
        // const refreshToken = this.cookie.get('refresh_token');
        return this.http.post('http://localhost:8000/api/token/refresh/', {refresh: refresh} );
    }
}

