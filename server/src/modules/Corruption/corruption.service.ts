import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';
import { Corruption } from './corruption.interface';

@Injectable()
export class CorruptionService {
  constructor(private readonly httpService: HttpService) {}

  getCorruptionData(): Observable<AxiosResponse<Corruption[]>> {
    return this.httpService
      .get('https://www.transparency.org/api/latest/cpi')
      .pipe(map((resp) => resp.data));
  }

}
