import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as dotenv from 'dotenv';
import * as express from 'express';
import firebaseAdmin from 'firebase-admin';
import * as functions from 'firebase-functions';

dotenv.config();

const expressServer = express();
firebaseAdmin.initializeApp();

const createFunction = async (expressInstance): Promise<void> => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );
  app.enableCors();
  await app.init();
};

export const api = functions
  .runWith({
    enforceAppCheck: true, // Requests without valid App Check tokens will be rejected.
  })
  .https.onRequest(async (request, response) => {
    await createFunction(expressServer);
    expressServer(request, response);
  });
