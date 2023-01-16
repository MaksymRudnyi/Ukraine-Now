import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CorruptionService } from './corruption.service';
import { CorruptionController } from './corruption.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [CorruptionController],
  providers: [CorruptionService],
})
export class CorruptionModule {}
