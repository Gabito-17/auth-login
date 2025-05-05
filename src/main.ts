// main.ts
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // elimina propiedades que no están en el DTO
      forbidNonWhitelisted: true, // lanza error si hay propiedades no permitidas
      transform: true, // convierte los tipos automáticamente
    }),
  );
  app.enableCors({
    origin: 'http://localhost:3005', // o '*' para permitir todos
    credentials: true, // si usás cookies o sesiones
  });

  const port = process.env.PORT;

  await app.listen(3000);
  //to do: Cambiar el puerto por variable de entorno

}
bootstrap();
