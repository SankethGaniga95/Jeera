import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeammemberTaskService {
  private apiBaseUrl = 'http://localhost:8080/task'
  constructor(private http:HttpClient) { }

  getTaskDetails(userId:any):Observable<any>{
  return this.http.get(`${this.apiBaseUrl}/task/${userId}`)
  }

  createTasks(taskData:any):Observable<any>{
    return this.http.post(`${this.apiBaseUrl}/task`,taskData)
  }

  updateTask(existingTask:any):Observable<any>{
    return this.http.patch(`${this.apiBaseUrl}/tasks/${existingTask._id}`,existingTask);
  }
}
