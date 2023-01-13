import { Controller, Get } from '@nestjs/common';
import { WarService } from './war.service';

@Controller('war')
export class WarController {
  constructor(private readonly warService: WarService) {}

  // outdated. can remove
  // @Get()
  // getOccupied() {
  //   return this.warService.create()
  // }
}
