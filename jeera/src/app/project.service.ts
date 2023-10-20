import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects:any[]=[]

  constructor() { 
    this.projects=[
      { id: 1, name: 'Project 1', description: 'Description for Project 1' },
      { id: 2, name: 'Project 2', description: 'Description for Project 2' },
      { id: 3, name: 'Project 3', description: 'Description for Project 3' },
      { id: 4, name: 'Project 4', description: 'Description for Project 4' },
      { id: 5, name: 'Project 5', description: 'Description for Project 5' },
    ]
  }

  getProjects():any[]{
    return this.projects;
  }
}
