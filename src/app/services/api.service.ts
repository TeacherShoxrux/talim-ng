import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public baseUrl:string ="http://localhost:5187/";
  public baseApiUrl:string =`${this.baseUrl}api`;

  constructor(private httpClient: HttpClient  ) { }
  getData<T>(endPoint: string): Observable<T> {
    return this.httpClient.get<T>(`${endPoint}`);
  }
  postData <T>(endPoint: string,data:any): Observable<T>{
    return this.httpClient.post<T>(`${endPoint}`,data);
  }
  putData<T>(endPoint: string,data:any): Observable<T> {
    return this.httpClient.put<T>(`${endPoint}`,data);
  }
  patchData<T>(endPoint: string,data:any): Observable<T> {
    return this.httpClient.patch<T>(`${endPoint}`,data);
  }
  deleteData<T>(endPoint: string,data:any): Observable<T> {
    return this.httpClient.delete<T>(`${endPoint}`);
  }
}
