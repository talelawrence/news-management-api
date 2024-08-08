import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
      origin: "*",
      methods: ["*"],
      allowedHeaders: "*"
  });
  app.setGlobalPrefix('news');

  const port = configService.get('http.port');
  await app.listen(port);
}
bootstrap();
