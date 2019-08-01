import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as compression from 'compression';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { AuthGuard } from './guards/auth.guard';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    ApplicationModule, 
    new FastifyAdapter(),
    { logger: false }
  );
  app.use(compression());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalGuards(new AuthGuard());
  await app.listen(3000);
}
bootstrap();