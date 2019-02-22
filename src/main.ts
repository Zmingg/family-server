import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as compression from 'compression';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { AuthGuard } from './guards/auth.guard';

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule, {
    logger: false,
  });
  app.use(compression());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();