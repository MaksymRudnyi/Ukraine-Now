import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WarService } from './war.service';
import { WarController } from './war.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
  ],
  controllers: [WarController],
  providers: [WarService],
})
export class WarModule {}
