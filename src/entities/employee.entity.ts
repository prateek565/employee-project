import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Task } from './task.entity';



@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @CreateDateColumn()
  hireDate: Date;

  @Column()
  position: string;

  @OneToMany(() => Task, task => task.employee)
  tasks: Task[];
}
