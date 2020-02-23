import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TaskService } from './task.service'
import { task } from './task.entity'


@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {

  }

  @Get()
  findAll(): Promise<task[]> {
    return this.taskService.findAll()
  }

  @Get(':id')
  get(@Param() params) {
    let {id} = params;
    console.log("l_ma>>> "+id);
    return this.taskService.findOne(params.id);
  }

  @Post()
  create(@Body() task: task) {
    return this.taskService.create(task);
  }

  @Put()
  update(@Body() task: task) {
    return this.taskService.update(task);
  }

  @Delete(':id')
  deleteUser(@Param() params) {
    return this.taskService.delete(params.id);
  }
}