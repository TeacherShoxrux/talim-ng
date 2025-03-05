import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {DataModel} from '../models/data.model';
import {AuthModel} from '../models/auth.model';
import {NewUser} from '../models/new-user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'accessToken';
  private refreshTokenKey = 'refreshToken';
  private userRoleKey = 'userRole';
  constructor(public apiService: ApiService) { }
  signIn(email: string, password: string)   {
    return  this.apiService.postData<DataModel<AuthModel>>(this.apiService.baseApiUrl+'/User/Login', {
      email: email,
      password: password});

  }
  signUp<T>(
   user: NewUser)   {
    return  this.apiService.postData<DataModel<T>>(this.apiService.baseApiUrl+'/User/Register', user);
  }
  getTopSubjects<T>(max:number=10)
  {
    return this.apiService.
    getData<T>(this.apiService.baseApiUrl+`/Subject/Top/${max}`);

  }

  setAccessToken(token: string): void {
    localStorage.setItem(this.accessTokenKey, token);
  }

  // 🔹 Access Tokenni olish
  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }

  // 🔹 Refresh Tokenni saqlash
  setRefreshToken(token: string): void {
    localStorage.setItem(this.refreshTokenKey, token);
  }

  // 🔹 Refresh Tokenni olish
  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  // 🔹 User Role-ni saqlash
  setUserRole(role: string): void {
    localStorage.setItem(this.userRoleKey, role);
  }

  // 🔹 User Role-ni olish
  getUserRole(): string | null {
    return localStorage.getItem(this.userRoleKey);
  }

  // 🔹 Tokenlarni o‘chirish (Logout)
  removeTokens(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
    localStorage.removeItem(this.userRoleKey);
  }

  // 🔹 Foydalanuvchi Admin yoki yo‘qligini tekshirish
  isAdmin(): boolean {
    return this.getUserRole() === 'admin';
  }

  // 🔹 Foydalanuvchi tizimga kirgan yoki yo‘qligini tekshirish
  isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

}
