import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const options = {
    allowedHeaders: '*',
    // allowedHeaders: [
    //   'Accept',
    //   'Content-Type',
    //   'Authorization',
    // ],
    origin: '*', //origin: 'http://localhost:3000',
    credentials: true,
  
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  };

  app.enableCors(options)
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
