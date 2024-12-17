import { Module } from '@nestjs/common';
import { PrimsaModule } from './primsa/primsa.module';
import { TaskModule } from './task/task.module';

@Module({
  imports: [PrimsaModule, TaskModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
