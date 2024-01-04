import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [
    { id: 1, name: 'Task 1', status: 'To Do' },
    { id: 2, name: 'Task 2', status: 'In Progress' },
    { id: 3, name: 'Task 3', status: 'Done' },
  ];

  getTasks(): Task[] {
    return this.tasks;
  }

 addTask(newTask: Task): void {
    this.tasks.push(newTask);
  }

  updateTaskStatus(taskId: number, newStatus: string): void {
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) {
      task.status = newStatus;
    }
  }

  deleteTask(taskId: number): void {
    this.tasks = this.tasks.filter((t) => t.id !== taskId);
  }
}
