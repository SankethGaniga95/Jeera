import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBaseUrl = 'http://localhost:8080/user';
  userRole:string=""
  successfulLogin: EventEmitter<string> = new EventEmitter<string>();

  // constructor(private http:HttpClient) { }

  // loginuser(logindata:any):Observable<any>{
  //   return this.http.post(`${this.apiBaseUrl}/login`,logindata);
  // }

  constructor(private http: HttpClient, private router: Router) {}

  loginuser(logindata: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/login`, logindata);
  }

  handleSuccessfulLogin(logindata: any): void {
    // Assuming that the 'role' is returned in the login response
    console.log("hello")
    const role = logindata.user.role;

    // Store the user's role in a variable or service for future use
    this.userRole = role;

    console.log(role)

    // Navigate to the appropriate page based on the user's role
    if (role === 'Admin') {
      this.router.navigate(['/admin']);
    } else if (role === 'Project Manager') {
      this.router.navigate(['/project-manager']);
    } else if (role === 'Team Member') {
      this.router.navigate(['/team-member']);
    }
  }
}
