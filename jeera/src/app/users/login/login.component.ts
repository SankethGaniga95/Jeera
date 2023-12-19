import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  logindata:any={}
  

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
       
        this.login.saveID(response.user._id)
        this.login.setLoggedIn(true)


         
      },
      (error) => {
        console.log(error);
      }
    );
  }

  

}
