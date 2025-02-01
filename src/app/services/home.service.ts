import {Injectable, OnInit} from '@angular/core';
import {ApiService} from './api.service';


@Injectable({
  providedIn: 'root'
})
export class HomeService{

  constructor(public apiService: ApiService) { }
  getEducationTypes<T>()
  {
    return this.apiService.
      getData<T>(this.apiService.baseApiUrl+"/EducationType");

  }
  getTopSubjects<T>(max:number=10)
  {
    return this.apiService.
    getData<T>(this.apiService.baseApiUrl+`/Subject/Top/${max}`);

  }
}
