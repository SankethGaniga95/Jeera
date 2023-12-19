import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeammemberProjectService {
  private apiBaseUrl = 'http://localhost:8080/task';
  constructor(private http:HttpClient) { }

  getProjectDetails(userId:any): Observable<any>{
  return this.http.get(`${this.apiBaseUrl}/tasks/${userId}`)
}
}
