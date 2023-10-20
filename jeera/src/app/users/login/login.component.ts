import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logindata:any={}
  private userId:any=""

  // constructor(private login:LoginService){}

  //   RegisterUser(){
  //   this.login.loginuser(this.logindata).subscribe(
  //     (response)=>{
  //       const role = response.role;

  //       this.login.successfulLogin.emit(role);
  //       alert("Login Sucessfully")
  //     this.logindata={}
  //     },(error)=>{
  //       console.log(error)
  //     }
  //   )
  // }

  constructor(private login: LoginService) {}

  RegisterUser() {
    this.login.loginuser(this.logindata).subscribe(
      (response) => {
        this.login.handleSuccessfulLogin(response);
        alert('Login Successfully');
        console.log(response)
        this.userId=response.user._id
        console.log(this.userId)
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getUserId(): any {
    return this.userId;
  }

}
