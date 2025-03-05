import {Injectable, OnInit} from '@angular/core';
import {ApiService} from './api.service';
import {NewEduDirection} from '../models/new-edu-direction';
import {NewSubject} from '../models/new-subject';
import {NewEducationType} from '../models/new-education-type';


@Injectable({
  providedIn: 'root'
})
export  class SubjectService{
  constructor(public apiService: ApiService) { }
  getEduDirectionsByTypeId<T>(id: number)
  {
    return this.apiService.getData<T>(this.apiService.baseApiUrl+`/EducationDirection/${id}`);
  }
  getSubjectsByEduDirectionId<T>(id: number)
  {
    return this.apiService.getData<T>(this.apiService.baseApiUrl+`/Subject/${id}`);
  }
  addSubject<T>(data:NewSubject){
    return this.apiService.postData(this.apiService.baseApiUrl+`/Subject/`,data);
  }
  addEduDirection<T>(data:NewEduDirection){
    return this.apiService.postData(this.apiService.baseApiUrl+`/EducationDirection/`,data);
  }
  addEduType<T>(data:NewEducationType){
    return this.apiService.postData(this.apiService.baseApiUrl+`/EducationType`,data);
  }


}
