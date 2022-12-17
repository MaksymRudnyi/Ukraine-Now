import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CorruptionService } from './corruption.service';
import { CorruptionResolver } from './corruption.resolver';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [],
  providers: [CorruptionService, CorruptionResolver],
})
export class CorruptionModule {}
