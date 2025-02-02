import {Injectable, OnInit} from '@angular/core';
import {ApiService} from './api.service';


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
}
