import { Component,OnInit } from '@angular/core';
import { ProjectmanagerTeamService } from 'src/app/services/projectmanager/projectmanager-team.service';

@Component({
  selector: 'app-project-team-management',
  templateUrl: './project-team-management.component.html',
  styleUrls: ['./project-team-management.component.css']
})
export class ProjectTeamManagementComponent {

  

  team_name: string="";
  teams:any[]=[]
  teamMembers:any[]=[]
  teamFixtures:any[]=[]
  selectedTeams:any[]=[]
  addTeam: any = {};

  constructor(private teamService: ProjectmanagerTeamService) {}



  ngOnInit() {
    this.loadTeams();
    this.loadTeamMembers();
    this.loadTeamFixtures();
  }

  loadTeams() {
    this.teamService.getAllTeams().subscribe(
      (response) => {
        this.teams = response; // Assuming response is an array of team objects
      },
      (error) => {
        console.error('Error loading teams:', error);
        // Handle the error as needed.
      }
    );
  }

  loadTeamMembers() {
    this.teamService.getAllTeamMembers().subscribe(
      (response) => {
        this.teamMembers = response.teamMembers; // Assuming response is an array of team objects
      },
      (error) => {
        console.error('Error loading teams:', error);
        // Handle the error as needed.
      }
    );
  }
  loadTeamFixtures() {
    this.teamService.getAllTeamFixtures().subscribe(
      (response) => {
        this.teamFixtures = response.results; // Assuming response is an array of team objects
      },
      (error) => {
        console.error('Error loading teams:', error);
        // Handle the error as needed.
      }
    );
  }

  createNewTeam() {
    this.teamService.createTeam(this.team_name).subscribe(
      (response) => {
        console.log('Team created successfully:', response);
        this.team_name=""
        // You can navigate to a different page or handle the response as needed.
      },
      (error) => {
        console.error('Error creating team:', error);
        // Handle the error as needed.
      }
    );
    this.ngOnInit()
  }

  // getTeamDetails(teamId: number) {
  //   this.teamService.getTeamDetails(teamId).subscribe((teamDetails) => {
  //     this.selectedTeams = teamDetails; // Store the selected team details
  //     console.log(this.selectedTeams) 
  //   });
  // }

  getTeamDetails(teamId: number) {
    this.teamService.getTeamDetails(teamId).subscribe((teamDetails: any) => {
      console.log('Received team details:', teamDetails);
      this.selectedTeams = teamDetails; // Store the selected team details as an object
    });
  }

   
  addTeammembers(){
    console.log(this.addTeam)
    this.teamService.addTeamMembers(this.addTeam).subscribe(
      (response)=>{
        console.log("yes")
        this.addTeam={}
      },
      (error)=>{
        console.log("Error Posting:",error)
      }
    )
    //  this.ngOnInit()

  }
  // editTeams(teamId:any){
  //   this.teamService.editTeams(teamId).subscribe(
  //     (response)=>{
  //       this.team
  //     }
  //   )
  // }
  

}
