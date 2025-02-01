import {Injectable, OnInit} from '@angular/core';
import {ApiService} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService{

  constructor(public apiService: ApiService) { }
  getEducationTypes()
  {
    var data= this.apiService.getData("EducationType").
    subscribe(data=>{
      console.log(data);
    }, error=>{
      console.log(error);
    });
  }
}
