import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { Employee } from '../entities/employee.entity';
import { EmployeeService } from '../services/employee.service';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  async findAll(): Promise<Employee[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Employee> {
    return this.employeeService.findById(id);
  }

  @Post()
  async create(@Body() employeeData: Employee): Promise<Employee> {
    return this.employeeService.create(employeeData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() employeeData: Employee): Promise<Employee> {
    return this.employeeService.update(id, employeeData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.employeeService.delete(id);
    }
    }
