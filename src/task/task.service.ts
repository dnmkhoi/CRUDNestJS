import { Injectable } from '@nestjs/common';
import { task } from './task.entity' 
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult, DeleteResult } from  'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(task)
    private readonly taskRepo: Repository<task>,
  ) {}

  async findAll (): Promise<task[]> {
    return await this.taskRepo.find();
  }

  async findOne (id: number): Promise<task> {
    return await this.taskRepo.findOne(id)
  }


  async create (task: task): Promise<task> {
    return await this.taskRepo.save(task)
  }

  async update(task: task): Promise<UpdateResult> {
    return await this.taskRepo.update(task.l_ma, task);
  }

  async delete(id): Promise<DeleteResult> {
    return await this.taskRepo.delete(id);
  }
}
