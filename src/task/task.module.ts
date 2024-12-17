import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { PrimsaModule } from 'src/primsa/primsa.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [PrimsaModule],
})
export class TaskModule {}
