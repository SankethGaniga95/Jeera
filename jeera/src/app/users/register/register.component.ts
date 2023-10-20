import { Component } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerdata:any={}

  constructor(private register:RegisterService){}

    RegisterUser(){
    this.register.registeruser(this.registerdata).subscribe(
      (response)=>{
        alert("User Registered Sucessfully")
      this.registerdata={}
      },(error)=>{
        console.log(error)
      }
    )
  }



}
