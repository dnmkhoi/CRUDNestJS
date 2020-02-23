import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([task])],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}