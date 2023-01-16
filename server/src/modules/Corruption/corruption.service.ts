import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class CorruptionService {
  constructor(private readonly httpService: HttpService) {}

  getCorruptionData(): Observable<AxiosResponse> {
    return this.httpService
      .get('https://www.transparency.org/api/latest/cpi')
      .pipe(map((resp) => resp.data));
  }
}
