import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CountiesController } from './counties.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CountiesController],
})
export class CountiesModule {}
