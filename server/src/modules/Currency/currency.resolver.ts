import { Query, Resolver, Args } from '@nestjs/graphql';
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

  @Query()
  currencyByDates(@Args() { startDate, endDate, valcode }: { startDate: string, endDate: string, valcode: string }) {
    return this.currencyService.getExchangeByDates(startDate, endDate, valcode)
  }
}
