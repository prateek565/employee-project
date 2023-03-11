import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal, Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TaskService {
  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {}
  
  async findAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  async findByEmployeeId(employeeId: number): Promise<Task[]> {
    return this.taskRepository.findBy({
      employee: Equal(`${employeeId}`),
  });
  }

  async create(taskData: Task): Promise<Task> {
    const task = new Task();
    task.title = taskData.title;
    task.description = taskData.description;
    task.employee = taskData.employee;

    return this.taskRepository.save(task);
  }

  async update(id: number, taskData: Task): Promise<Task> {
    const task = await this.taskRepository.findOneBy({id});
    task.title = taskData.title;
    task.description = taskData.description;
    task.employee = taskData.employee;

    return this.taskRepository.save(task);
  }

  async delete(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
