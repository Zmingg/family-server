import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ArticleService from './article.service';
import ArticleController from './article.controller';
import ArticleEntity from './article.entity';
import { APP_FILTER } from '@nestjs/core';
import HttpException from '../../exceptions/http';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity])],
  providers: [ArticleService, {
    provide: APP_FILTER,
    useClass: HttpException,
  }],
  controllers: [ArticleController],
})
export default class ArticleModule {}