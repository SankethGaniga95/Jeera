import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private apiBaseUrl = 'http://localhost:8080/project';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/project`);
  }

  getProjectusers(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/project_users/652e4099c13d07d180bddd41`);
  }

  createProject(projectData: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/project`, projectData);
  }

  deleteProject(projectId: number): Observable<any> {
    return this.http.delete(`${this.apiBaseUrl}/project/${projectId}`);
  }

  updateProject(updatedProject: any): Observable<any> {
    return this.http.patch(`${this.apiBaseUrl}/project/${updatedProject._id}`, updatedProject);
  }
}

