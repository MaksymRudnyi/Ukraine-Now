import { Controller, Get } from '@nestjs/common';
import { CorruptionService } from './corruption.service';

@Controller('corruption')
export class CorruptionController {
  constructor(private readonly corruptionService: CorruptionService) {}

  @Get()
  getCorruptionData() {
    return this.corruptionService.getCorruptionData();
  }
}
