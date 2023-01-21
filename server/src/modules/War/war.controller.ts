import { Controller, Get } from '@nestjs/common';
import { WarService } from './war.service';

@Controller('war')
export class WarController {
  constructor(private readonly warService: WarService) {}

  // @Get()
  // create() {
  //   return this.warService.create();
  // }

  @Get('history')
  history() {
    return this.warService.history();
  }

  @Get('sync')
  sync() {
    return this.warService.sync();
  }
}
