
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {}
  
  public getsearchuniversiti(country: string): Observable<any> {
    return this.http.get<any>('http://universities.hipolabs.com/search?country=' + country);
  }

}
