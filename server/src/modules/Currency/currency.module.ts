import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { CurrencyController } from './currency.controller';
import { CurrencyService } from './currency.service';
import { CurrencyResolver } from './currency.resolver'

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  })],
  controllers: [],
  providers: [
    CurrencyService,
    CurrencyResolver
  ],
})
export class CurrencyModule {}
