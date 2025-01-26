import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Urls} from '../shared/urls';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  getEducationTypes(){
    this.http.get(Urls.eduTypes).subscribe({
      next:res=>{
        console.log(res);
    },
      error:err=>{
      console.log(err);}
      }
    )
  }
}
