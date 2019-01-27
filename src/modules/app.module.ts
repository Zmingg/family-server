import { Module } from '@nestjs/common';
import BasicController from '../controllers/basic.controller';

@Module({
  controllers: [BasicController],
})
export class ApplicationModule {}