import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private employeeRepository: Repository<Employee>) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findById(id: number): Promise<Employee> {
    return this.employeeRepository.findOneBy({id});
  }

  async create(employeeData: Employee): Promise<Employee> {
    const employee = new Employee();
    employee.name = employeeData.name;
    employee.email = employeeData.email;
    employee.phone = employeeData.phone;
    employee.position = employeeData.position;
    employee.tasks=employeeData.tasks;
    return this.employeeRepository.save(employee);
  }

  async update(id: number, employeeData: Employee): Promise<Employee> {
    const employee = await this.employeeRepository.findOneBy({id});
    employee.name = employeeData.name;
    employee.email = employeeData.email;
    employee.phone = employeeData.phone;
    employee.position = employeeData.position;
    employee.tasks=employeeData.tasks;
    return this.employeeRepository.save(employee);
  }

  async delete(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
