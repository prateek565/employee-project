import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Task } from './entities/task.entity';
import { EmployeesController } from './controllers/employee.controller';
import { EmployeeService } from './services/employee.service';
import { TaskService } from './services/task.service';
import { TasksController } from './controllers/task.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: +process.env.POSTGRES_PORT || 5432,
      username: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'postgres',
      database: process.env.POSTGRES_DB || 'test',
      entities: [Employee, Task],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Employee, Task]),
  ],
  controllers: [EmployeesController, TasksController],
  providers: [EmployeeService, TaskService],
})
export class AppModule {}
