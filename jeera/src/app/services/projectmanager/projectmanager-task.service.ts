import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectmanagerTaskService {
  private apiBaseUrl = 'http://localhost:8080/task';

  constructor(private http:HttpClient) { }

  getTasks():Observable<any>{
    return this.http.get(`${this.apiBaseUrl}/tasks`)
  }

  updateTask(existingTask:any):Observable<any>{
    return this.http.patch(`${this.apiBaseUrl}/tasks/${existingTask.id}`,existingTask);
  }

  createTasks(taskData:any):Observable<any>{
    return this.http.post(`${this.apiBaseUrl}/task`,taskData)
  }
}
