import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { PORT } = process.env;
  const config = new DocumentBuilder()
    .setVersion('1.0')
    .addTag('Book Store')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.setGlobalPrefix('api');
  await app.listen(PORT, () => console.log('app is running with port:', PORT));
}
bootstrap();
