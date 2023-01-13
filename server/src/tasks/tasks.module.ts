import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksService } from './tasks.service';

import { WarService } from '../modules/War/war.service';
import { War as WarModel, WarSchema } from '../modules/War/schemas/war.schema';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forFeature([{ name: WarModel.name, schema: WarSchema }]),
  ],
  providers: [TasksService, WarService],
})
export class TasksModule {}
