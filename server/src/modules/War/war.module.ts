import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { WarService } from './war.service';
import { WarResolver } from './war.resolver';
import { War, WarSchema } from './schemas/war.schema';
import { WarController } from './war.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    MongooseModule.forFeature([{ name: War.name, schema: WarSchema }]),
  ],
  controllers: [WarController],
  providers: [WarService, WarResolver],
})
export class WarModule {}
