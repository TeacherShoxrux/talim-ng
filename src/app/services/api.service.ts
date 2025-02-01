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
  getData(endPoint: string): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/${endPoint}`);
  }
  postData(endPoint: string,data:any): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/${endPoint}`,data);
  }
  putData(endPoint: string,data:any): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/${endPoint}`,data);
  }
  patchData(endPoint: string,data:any): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/${endPoint}`,data);
  }
  deleteData(endPoint: string,data:any): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/${endPoint}`,data);
  }
}
