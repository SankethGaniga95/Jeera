import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiBaseUrl = 'https://jeerabackened.onrender.com/user';
  userRole:string=""
  private userID:any=""
  isLoggedIn=localStorage.setItem("loginstatus",JSON.stringify(false))
  successfulLogin: EventEmitter<string> = new EventEmitter<string>();


  constructor(private http: HttpClient, private router: Router) {}

  loginuser(logindata: any): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/login`, logindata);
  }

  setLoggedIn(value: boolean): void {
    localStorage.setItem('isLoggedIn', value.toString());
  }

  getLoggedIn(): boolean {
    const storedValue = localStorage.getItem('isLoggedIn');
    return storedValue ? JSON.parse(storedValue) : false;
  }


  saveID(userid:any){
    this.userID=userid
    localStorage.setItem('userId', this.userID)
  }

  getUserId(): number {
    return this.userID;
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
