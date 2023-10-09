import { Component } from '@angular/core';

@Component({
  selector: 'app-task-listing',
  templateUrl: './task-listing.component.html',
  styleUrls: ['./task-listing.component.css']
})
export class TaskListingComponent {
  tasks = [
    { id: 1, name: 'Task 1', description: 'Description for Task 1' },
    { id: 2, name: 'Task 2', description: 'Description for Task 2' },
    { id: 3, name: 'Task 3', description: 'Description for Task 3' },
    { id: 4, name: 'Task 4', description: 'Description for Task 4' },
    { id: 5, name: 'Task 5', description: 'Description for Task 5' },
  ]

  deleteTask(task: any) {
    const index = this.tasks.findIndex((t: any) => t.id === task);

    // Check if the task was found
    if (index !== -1) {
      // Remove the task from the tasks array
      this.tasks.splice(index, 1);
    } else {
      console.error('Task not found:', task);
    }
  
  }

}
