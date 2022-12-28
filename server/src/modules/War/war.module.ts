import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WarService } from './war.service';
import { WarResolver } from './war.resolver';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [],
  providers: [WarService, WarResolver],
})
export class WarModule {}
