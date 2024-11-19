import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

   baseUrl='';
  constructor(private http:HttpClient) { }

addUser(user :User):Observable<User> {
  return this.http.post<User>(`${this.baseUrl}`,user)
}
  
}
