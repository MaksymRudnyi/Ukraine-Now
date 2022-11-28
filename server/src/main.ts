import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(process.env.PORT);
}
bootstrap();
