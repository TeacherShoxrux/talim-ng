import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {ThemeContentUpdate} from '../models/theme-content-update';

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
  createThemeBySubjectId<T>(id: number){
    return this.apiService.getData<T>(
      this.apiService.baseApiUrl+`/Theme/Create/${id}`
    )
  }
  updateThemeContent<T>(data: ThemeContentUpdate){
    return this.apiService.putData<T>(
      this.apiService.baseApiUrl+`/Theme`,data
    );
  }
  uploadImageContent<T>(id: number){
    return this.apiService.getData<T>(
      this.apiService.baseApiUrl+`/Theme/Content/${id}`
    );
  }

}
