import {
    Entity, PrimaryGeneratedColumn, Column, BaseEntity,
  } from 'typeorm';
  import { IsNotEmpty } from 'class-validator';
  
  @Entity()
  class Task extends BaseEntity {
    @PrimaryGeneratedColumn()
    id = null;
  
    @Column('varchar')
    @IsNotEmpty()
    name = '';

    @Column('text')
    description = '';

    @Column('varchar')
    @IsNotEmpty()
    status = '';
  
    @Column('varchar')
    @IsNotEmpty()
    creator = '';
  
    @Column('varchar')
    assignedTo = '';
  
    @Column('varchar')
    @IsNotEmpty()
    tags = '';
  }
  
  export default Task;
  