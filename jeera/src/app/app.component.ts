import { Component,OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeera';
  selectedRole: string = 'Admin'; // Default role
 
  
  
  constructor(private login:LoginService){}
  ngOnInit():void{
 
  }

  isLoggedIn(): boolean {
    return this.login.getLoggedIn();
  }
  logout() {
   return this.login.setLoggedIn(false);
  }
  onSuccessfulLogin(role: string) {
    this.selectedRole = role;
  }
}
