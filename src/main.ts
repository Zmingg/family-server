import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';
import * as compression from 'compression';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { AuthGuard } from './guards/auth.guard';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    ApplicationModule, 
    new FastifyAdapter(),
    { logger: false }
  );
  app.use(compression());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalGuards(new AuthGuard());

  const options = new DocumentBuilder()
    .setTitle('AI 质控')
    // .setDescription('The cats API description')
    .setVersion('1.0')
    .setBasePath('api/ai')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000);
}
bootstrap();