import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "https://educare.ghanablog.net/php/mobile";

  constructor(private http: HttpClient) { }

  getRequest(url: string, id?: any): Observable<any> { 
    return this.http.get(`${this.baseUrl}/${url}`) 
  }

  postRequest(url: string, body: any): Observable<any> { 
    return this.http.post(`${this.baseUrl}/${url}`, body) 
  }

  putRequest(url: string, body: any): Observable<any> { 
    return this.http.put(`${this.baseUrl}/${url}`, body) 
  }

  deleteRequest(url: string, id?: any): Observable<any> { 
    return this.http.delete(`${this.baseUrl}/${url}`)
   }

}
