import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import PassportModule from './modules/passport/passport.module';
import ArticleModule from './modules/article/article.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    PassportModule, ArticleModule
  ]
})
export class ApplicationModule {}