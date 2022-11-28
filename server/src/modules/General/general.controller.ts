import { Controller, Get } from '@nestjs/common';
import { GeneralService } from './general.service';

@Controller('general')
export class GeneralController {
  constructor(private readonly initService: GeneralService) {}

  @Get()
  getOccupied() {
    return ({
        occupied: this.initService.getOccupied()}
    )}
}