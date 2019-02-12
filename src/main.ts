import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as compression from 'compression';
import { ResponseInterceptor } from './interceptors/response.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);
  app.use(compression());
  app.useGlobalInterceptors(new ResponseInterceptor());
  await app.listen(3000);
}
bootstrap();