import { Module, NestModule, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import ResponseMiddleware from './middleware/response.middleware';
import PassportModule from './modules/passport/passport.module';
import ArticleModule from './modules/article/article.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    PassportModule, ArticleModule
  ]
})

export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ResponseMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}