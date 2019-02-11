import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PassportModule from './passport/passport.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), PassportModule
  ]
})
export class ApplicationModule {}