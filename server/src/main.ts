// import { AppModule } from './app.module';
// import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
dotenv.config();

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule, { cors: true });
//   await app.listen(process.env.LOCAL_PORT || process.env.PORT);
// }
// bootstrap();

import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';
import * as functions from 'firebase-functions';
import { AppModule } from './app.module';

const expressServer = express();

const createFunction = async (expressInstance): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.enableCors();
  await app.init();
};

export const api = functions.https.onRequest(async (request, response) => {
  await createFunction(expressServer);
  expressServer(request, response);
});
