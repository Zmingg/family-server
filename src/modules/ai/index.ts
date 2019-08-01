import { Module } from '@nestjs/common';
import { CatsController } from './ai.controller';
import { CatsService } from './ai.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule {}