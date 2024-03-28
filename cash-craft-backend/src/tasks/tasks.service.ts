import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  getAllTasks() {
    return 'Get all tasks';
  }

  getTaskById(id: string) {
    return `Get task with id ${id}`;
  }

  createTask() {
    return 'Create a task';
  }

  updateTask() {
    return 'Update a task';
  }

  
}
