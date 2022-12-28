import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { War } from './war.interface';

@Injectable()
export class WarService {
  constructor(private readonly httpService: HttpService) {}

  getLatest(): Observable<AxiosResponse<War>> {
    console.log('gettting war data   ')
    return this.httpService
      .get('https://russianwarship.rip/api/v1/statistics/latest')
      .pipe(map((resp) => resp.data.data));
  }
}
