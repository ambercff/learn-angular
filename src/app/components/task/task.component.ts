import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: Task[] = [];
  newTaskTitle = '';

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  addTask(): void {
    if(this.newTaskTitle.trim()){
      this.taskService.addTask(this.newTaskTitle.trim());
      this.newTaskTitle = '';
    }
  }

  toggleTask(id: number): void {
    this.taskService.toggleTask(id);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }
}
