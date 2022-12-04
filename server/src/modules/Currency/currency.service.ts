import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Currency } from './currency.interface'

@Injectable()
export class CurrencyService {
  constructor(private readonly httpService: HttpService) {}

  getTodayExchange(): Observable<AxiosResponse<Currency[]>> {
    console.log('run query ')
    return this.httpService.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json').pipe(
      map(resp => resp.data)
    )
  }
}
