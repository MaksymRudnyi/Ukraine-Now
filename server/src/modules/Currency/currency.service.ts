import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { ICurrency } from './currency.interface';

@Injectable()
export class CurrencyService {
  constructor(private readonly httpService: HttpService) {}

  exchange(
    startDate: string,
    endDate: string,
    valcode: string,
  ): Observable<AxiosResponse<ICurrency[]>> {
    return this.httpService
      .get(
        `https://bank.gov.ua/NBU_Exchange/exchange_site?start=${startDate}&end=${endDate}&valcode=${valcode}&sort=exchangedate&order=desc&json`,
      )
      .pipe(map((resp) => resp.data));
  }
}
