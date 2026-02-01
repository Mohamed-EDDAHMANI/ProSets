import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });


  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // remove unexpected properties
    forbidNonWhitelisted: true, // throw error if extra properties
    transform: true,        // auto-transform payload to DTO instances
  }));

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();

