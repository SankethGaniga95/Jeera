import { Component,OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/projectmanager/projectmanager-projects.service';
import { RegisterService } from 'src/app/services/register.service';
@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.css']
})

export class ProjectManagementComponent implements OnInit {
  showProjectForm=false
  projects: any[]=[]; // Define the type based on your API response structure
  newProject: any = {};
  projectedit:any={};
  editIsTrue=false
  projectsusers: any[]=[];
  projectManagers: any[]=[];
  constructor(private projectService: ProjectService, private userService:RegisterService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
      console.log(this.projects)
      this.loadProjects();
      this.showManagers()
    });
  }
  showManagers(){
    this.userService.getProjectManagers().subscribe((managers) => {
      this.projectManagers = managers;
      console.log(this.projectManagers)
    });
  }
  loadProjects() {
    this.projectService.getProjectusers().subscribe((data: any) => {
      this.projectsusers = data;
    });
  }

  createProject() {
    // Call the service to create the project
    this.projectService.createProject(this.newProject).subscribe(
      (response) => {
        // Handle a successful response (e.g., show a success message)
        // alert("Project Created Successfully!")
        this.showProjectForm = false;
        // Reset the form
        this.newProject = {};
      },
      (error) => {
        // Handle any errors (e.g., show an error message)
        console.error('Project creation error:', error);
      }
    );
  }

  deleteProject(projectId: number) {
    // Call the service to delete the project
    this.projectService.deleteProject(projectId).subscribe(
      () => {
        // Handle a successful deletion (e.g., remove the project from the list)
        this.removeProjectFromList(projectId);
      },
      (error) => {
        // Handle any errors (e.g., show an error message)
        console.error('Project deletion error:', error);
      }
    );
  }

  // Method to remove the deleted project from the list
  removeProjectFromList(projectId: number) {
    // Implement the logic to remove the project with the given ID from your component's list of projects.
    // For example, you can use Array.prototype.filter() to create a new list without the deleted project.
    this.projects = this.projects.filter((project) => project.id !== projectId);
  }
  
  editProject(item: any) {
    this.projectedit = { ...item }; // Make a copy of the item to edit
    this.projectedit.start_date = this.formatDate(this.projectedit.start_date);
    this.projectedit.end_date = this.formatDate(this.projectedit.end_date);
    this.editIsTrue=true
  }
  
  formatDate(date: string): string {
    // Implement the date formatting logic to convert your date to "yyyy-MM-dd" format
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Add 1 because months are 0-based
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  updateProject() {
    // Call the service to update the project
    this.projectService.updateProject(this.projectedit).subscribe(
      () => {
        // Handle a successful update (e.g., show a success message)
        alert('Project updated successfully');
        this.projectedit={}
      },
      (error) => {
        // Handle any errors (e.g., show an error message)
        console.error('Project update error:', error);
      }
    
    );
    this.ngOnInit()
    this.editIsTrue=false
  }


  

}

