// task-form.component.ts
import { Component } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  newTask: Task = { id: 0, name: '', status: 'To Do' };

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTask.name.trim() !== '') {
      this.taskService.addTask(this.newTask);
      this.newTask = { id: 0, name: '', status: 'To Do' }; // Reset the form
    }
  }
}
