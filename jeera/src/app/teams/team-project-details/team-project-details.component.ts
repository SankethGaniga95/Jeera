import { Component,OnInit } from '@angular/core';
import { TeammemberProjectService } from 'src/app/services/teammember/teammember-project.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-team-project-details',
  templateUrl: './team-project-details.component.html',
  styleUrls: ['./team-project-details.component.css']
})
export class TeamProjectDetailsComponent {
  // userId = this.saveId.getUserId();
  userId=localStorage.getItem('userId')
  assignedProjects:any[]=[]
  constructor(private project:TeammemberProjectService, private saveId:LoginService){ }
  ngOnInit():void{
    this.LoadProjectsForTeam()
  }
  LoadProjectsForTeam(){
   this.project.getProjectDetails(this.userId).subscribe((data)=>{
   this.assignedProjects=data
   console.log(this.assignedProjects)
   })
  }




}
