import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SportsService {

  constructor(private http:HttpClient) { }

  url = "https://newsapi.org/v2/top-headlines?country=tr&category=sports&apiKey=";
  // apiKey = "676f017549224f488970f1835f9db971";
   apiKey = "676f017549224f488970f1835f9db971";
  //  f36134c09bdf41efa9d076a664b85e82
  getSports(): Observable<any>{
    return this.http.get(this.url+this.apiKey);
  }

  
}
