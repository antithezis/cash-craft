import { Controller, Get, Post } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  @Get()
  helloWorld() {
    return 'hello World';
  }

  @Post()
  createTask() {
    return 'create task';
  }
}
