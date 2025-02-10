import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectThemesService {

  constructor(public apiService: ApiService) { }
  getThemesListBySubjectId<T>(id: number)
  {
    return this.apiService.getData<T>(
      this.apiService.baseApiUrl+`/Theme/${id}`
    )
  }
  getThemeContentById<T>(id: number){
    return this.apiService.getData<T>(
      this.apiService.baseApiUrl+`/Theme/Content/${id}`
    );
  }

}
