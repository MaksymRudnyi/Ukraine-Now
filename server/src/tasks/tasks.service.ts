import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout } from '@nestjs/schedule';
import { WarService } from '../modules/War/war.service';

@Injectable()
export class TasksService {
  constructor(private readonly warService: WarService) {}

  @Cron('0 12 * * *')
  handleInterval() {
    this.warService.sync().then();
  }
}
