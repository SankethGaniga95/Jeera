import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectmanagerTeamService {

  private apiUrl = 'https://jeerabackened.onrender.com/team'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  createTeam(teamName: string): Observable<any> {
    const teamData = { team_name: teamName };
    return this.http.post(`${this.apiUrl}/team`, teamData);
  }

  getAllTeams(): Observable<any> {
    return this.http.get(`${this.apiUrl}/team`);
  }
  getAllTeamMembers(): Observable<any>{
    return this.http.get(`${this.apiUrl}/team-members`)
  }
  getAllTeamFixtures(): Observable<any>{
    return this.http.get(`${this.apiUrl}/team_members`)
  }

  getTeamDetails(teamId:any):Observable<any>{
    return this.http.get(`${this.apiUrl}/team_members/${teamId}`)

  }
  addTeamMembers(addTeam:any):Observable<any>{
    return this.http.post(`http://localhost:8080/team/team_members`,addTeam)
  }
}
