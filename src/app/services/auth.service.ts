import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {DataModel} from '../models/data.model';
import {AuthModel} from '../models/auth.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public apiService: ApiService) { }
  logIn(email: string, password: string)  : boolean {
    let user= this.apiService.postData<DataModel<AuthModel>>(this.apiService.baseApiUrl+'/User/Login', {
      email: email,
      password: password
    }).subscribe(data => {
        localStorage.setItem("user", JSON.stringify(data.data));
        sessionStorage.setItem("user",JSON.stringify(data.data));
        alert("Logged in successfully");
    });

    console.log(user);

    return true;
  }

  logOut() {
    localStorage.removeItem('token');
  }
  register(firstName: string, lastName: string, email: string, password: string) {
  }
  submit(firstName: string, lastName: string, email: string, password: string) {

  }

}
