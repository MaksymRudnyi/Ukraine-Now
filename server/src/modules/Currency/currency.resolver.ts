import { Query, Resolver } from '@nestjs/graphql';
import { CurrencyService } from './currency.service';

@Resolver('Currency')
export class CurrencyResolver {
  constructor(
    private currencyService: CurrencyService,
  ) {}

  @Query()
  currencyToday() {
    return this.currencyService.getTodayExchange()
  }
}
