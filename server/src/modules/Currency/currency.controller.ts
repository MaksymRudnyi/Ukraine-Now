import { Controller, Get, Query } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private readonly currencyService: CurrencyService) {}

  @Get()
  exchange(@Query() query: { start: string; end: string; valcode: string }) {
    return this.currencyService.exchange(query.start, query.end, query.valcode);
  }
}
