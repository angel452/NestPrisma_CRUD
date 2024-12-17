import { Module } from '@nestjs/common';
import { PrimsaService } from './primsa.service';

@Module({
  controllers: [],
  providers: [PrimsaService],
  exports: [PrimsaService],
})
export class PrimsaModule {}
