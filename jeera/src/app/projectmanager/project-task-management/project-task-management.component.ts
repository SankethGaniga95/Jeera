import { Component, OnInit } from '@angular/core';
import { ProjectmanagerTaskService } from 'src/app/services/projectmanager/projectmanager-task.service';
import { ProjectService } from 'src/app/services/projectmanager/projectmanager-projects.service';
import { RegisterService } from 'src/app/services/register.service';


@Component({
  selector: 'app-project-task-management',
  templateUrl: './project-task-management.component.html',
  styleUrls: ['./project-task-management.component.css']
})
export class ProjectTaskManagementComponent {
  tasks: any[] = [];
  currentItem:any
  showTaskForm=false
  newTask: any = {};
  projects: any[]=[];
  TeamMembers:any[]=[]
  constructor(private taskService: ProjectmanagerTaskService, private userService:ProjectService, private user:RegisterService) {}
  
  // userId = this.login.getUserId();
  ngOnInit(): void {
    this.loadTasks();
    this.showProjects();
    this.showTeamMembers()
  }
  showProjects(){
    this.userService.getProjects().subscribe((managers) => {
      this.projects = managers;
      console.log(this.projects)
    });
  }
  showTeamMembers(){
    this.user.getTeamMembers().subscribe((team) => {
      this.TeamMembers = team;
      console.log(this.TeamMembers)
    });
  }

  loadTasks() {
    this.taskService.getTasks().subscribe((data: any) => {
      this.tasks = data;
    });
  }

  createTask(){
    this.taskService.createTasks(this.newTask).subscribe(
      (resonse)=>{
        this.showTaskForm=false
        this.newTask={}
        console.log(this.newTask)
      },
    (error)=>{
      console.log("Task creation error:",error)
    }
    )
  }


  // updateTaskStatus(taskId: number, newStatus: string) {
  //   this.taskService.updateTaskStatus(taskId, newStatus).subscribe(
  //     (response) => {
  //       console.log('Task status updated successfully:', response);
  //       // If you want to update the task status in your local tasks array, you can do it here.
  //     },
  //     (error) => {
  //       console.error('Error updating task status:', error);
  //     }
  //   );
  // }

  // updateTaskStatus(taskId: number, newStatus: string) {
  //   // Fetch the existing task
  //   const existingTask = this.tasks.find(task => task.id === taskId);
  
  //   if (existingTask) {
  //     // Update the status of the existing task
  //     existingTask.status = newStatus;
  
  //     // Send the updated task to your service
  //     this.taskService.updateTask(existingTask).subscribe(
  //       (response) => {
  //         console.log('Task status updated successfully:', response);
  //         // You can update your local tasks array here if needed.
  //       },
  //       (error) => {
  //         console.error('Error updating task status:', error);
  //       }
  //     );
  //   }
  // }
  
  updateTaskStatus(taskId: number, newStatus: string) {
    const existingTask = this.tasks.find(task => task.id === taskId);
  
    if (existingTask) {
      existingTask.status = newStatus;
  
      // Check if `due_date` is a string; if so, convert it to a Date object
      if (typeof existingTask.due_date === 'string') {
        existingTask.due_date = new Date(existingTask.due_date);
      }
  
      // Ensure it's a valid Date object before converting to ISO string
      if (existingTask.due_date instanceof Date && !isNaN(existingTask.due_date)) {
        existingTask.due_date = existingTask.due_date.toISOString().slice(0, 19).replace('T', ' ');
      }
  
      this.taskService.updateTask(existingTask).subscribe(
        (response) => {
          console.log('Task status updated successfully:', response);
          // You can update your local tasks array here if needed.
        },
        (error) => {
          console.error('Error updating task status:', error);
        }
      );
    }
  }

  getPriorityClass(priority: string): string {
    if (priority === 'High') {
      return 'high-priority';
    }  else if (priority === 'Medium') {
      return 'medium-priority';
    } else if (priority === 'Low') {
      return 'low-priority';
    }
    return ''; // Default class or empty string if priority is not 'high' or 'low'
  }
  
  
  

  getFilteredTasks(status:string) {
    return this.tasks.filter(el => el.status === status);
  }
  dragStart(item:any){
    this.currentItem=item
    console.log("DragStart")

  }
  // onDrop(event:any,status:string){
  //   console.log("OnDrop")
  //   event.preventDefault()
  //   const record=this.tasks.find(el=>el.id==this.currentItem.id)
  //   if(record!=undefined){
  //     record.status=status
  //   }
  //   if (this.currentItem) {
  //     this.updateTaskStatus(this.currentItem.id, status);
  //     this.currentItem.status = status;
  //     this.currentItem = null;
  //   }
  //   this.currentItem=null
  // }


  onDrop(event: any, status: string) {
    console.log('OnDrop');
    event.preventDefault();
    if (this.currentItem) {
      const record = this.tasks.find((el) => el.id == this.currentItem.id);
      if (record) {
        record.status = status;
        this.updateTaskStatus(this.currentItem.id, status);
      }
      this.currentItem = null;
    }
  }
  
  onDragover(event:any){
    event.preventDefault()
    console.log("onDragover")
  }
}
