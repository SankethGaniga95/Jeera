import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiBaseUrl = 'http://localhost:8080/user';

  constructor(private http:HttpClient) { }

  registeruser(registerdata:any):Observable<any>{
    return this.http.post(`${this.apiBaseUrl}/user`,registerdata);
  }
   
  getProjectManagers():Observable<any>{
    return this.http.get(`${this.apiBaseUrl}/showmanager`)
  }
  getTeamMembers():Observable<any>{
    return this.http.get(`${this.apiBaseUrl}/showteammembers`)
  }

  




}
