import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import HttpException from './exceptions/http';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(compression());
  await app.listen(3000);
}
bootstrap();