import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PassportService from './passport.service';
import PassportController from './passport.controller';
import PassportEntity from './passport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PassportEntity])],
  providers: [PassportService],
  controllers: [PassportController],
})
export default class PassportModule {}