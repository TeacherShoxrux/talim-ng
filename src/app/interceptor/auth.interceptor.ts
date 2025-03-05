import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import {AuthService} from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;

  constructor(private authService: AuthService, private http: HttpClient) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let accessToken = this.authService.getAccessToken();

    // So‘rovni token bilan klon qilish
    let authReq = req;
    if (accessToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          // Agar token muddati tugagan bo‘lsa, Refresh Token orqali yangisini olamiz
          return this.handle401Error(req, next);
        }
        return throwError(error);
      })
    );
  }

  private handle401Error(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;

      const refreshToken = this.authService.getRefreshToken();
      if (refreshToken) {
        return this.http.post<any>('https://your-api.com/refresh-token', { refreshToken }).pipe(
          switchMap(response => {
            this.authService.setAccessToken(response.accessToken);
            this.isRefreshing = false;

            // Yangi token bilan so‘rovni qaytadan jo‘natish
            return next.handle(
              req.clone({ setHeaders: { Authorization: `Bearer ${response.accessToken}` } })
            );
          }),
          catchError(err => {
            this.isRefreshing = false;
            this.authService.removeTokens();
            return throwError(err);
          })
        );
      }
    }
    return throwError(() => new Error('Refresh Token yo‘q'));
  }
}
