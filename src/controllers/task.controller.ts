import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Task } from '../entities/task.entity';
import { TaskService } from '../services/task.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  async findAll(): Promise<Task[]> {
    return this.taskService.findAll();
  }
  @Get('employee/:id')
  async findByEmployeeId(@Param('id') id: number): Promise<Task[]> {
    return this.taskService.findByEmployeeId(id);
  }

  @Post()
  async create(@Body() taskData: Task): Promise<Task> {
    return this.taskService.create(taskData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() taskData: Task): Promise<Task> {
    return this.taskService.update(id, taskData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.taskService.delete(id);
  }
}
