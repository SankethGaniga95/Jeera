import { Component, OnInit } from '@angular/core';
import { AdminProjectService } from 'src/app/services/admin/admin-project.service';


@Component({
  selector: 'app-admin-project-management',
  templateUrl: './admin-project-management.component.html',
  styleUrls: ['./admin-project-management.component.css']
})
export class AdminProjectManagementComponent implements OnInit {
  projects: any[]=[]; // Define the type based on your API response structure

  constructor(private projectService: AdminProjectService) {}

  ngOnInit(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
      console.log(this.projects)
    });
  }

}





