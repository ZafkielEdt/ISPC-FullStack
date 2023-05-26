import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { Observable, from } from 'rxjs';
import { LoginService } from './service/login.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private cookieService: CookieService,
    private router: Router,
    private inject: Injector
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.cookieService.get('token');
    if (accessToken) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next.handle(request).pipe(
      catchError((error: any) => {
        if (error.status === 401) {
          const refreshToken = this.cookieService.get('refresh_token');
          let service = this.inject.get(LoginService);
          if(service.islogged()){
          if (refreshToken) {
            return service.refreshToken(refreshToken).pipe(
              catchError(() => {
                service.logout();
                this.router.navigate(['/login']);
                return throwError(() => new Error('Token refreshing failed'));
              }),
              switchMap((res: any) => {
                if (res && res.access) {
                  this.cookieService.set('token', res.access);
                  request = request.clone({
                    setHeaders: {
                      Authorization: `Bearer ${res.access}`,
                    },
                  });
                  return next.handle(request);
                } else {
                  service.logout();
                  this.router.navigate(['/login']);
                  return throwError(() => new Error('Token refreshing failed'));
                }
              }),
              catchError((error: any) => {
                service.logout();
                return from(throwError(() => error));
              })
            );
          } else {
            service.logout();
            this.router.navigate(['/login']);
            return throwError(() => new Error('Refresh token not found'));
          }
        }else{
          service.logout();
          this.router.navigate(['/login']);
          return throwError(() => new Error('User not logged in'));
        }
        } else {
          this.cookieService.delete('token');
          this.cookieService.delete('refresh_token');
          return throwError(() => error);
        }
      })
    );
  }
}

