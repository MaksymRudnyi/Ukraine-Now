import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { Observable, map, of, forkJoin } from 'rxjs';
import { AxiosResponse } from 'axios';
import { War } from './war.interface';
import { War as WarModel, WarDocument } from './schemas/war.schema';

@Injectable()
export class WarService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(WarModel.name) private warModel: Model<WarDocument>,
  ) {}

  getLatest(): Observable<AxiosResponse<War>> {
    return this.httpService
      .get('https://russianwarship.rip/api/v1/statistics/latest')
      .pipe(map((resp) => resp.data.data));
  }

  getStatistics(date: string) {
    return this.httpService
      .get(`https://russianwarship.rip/api/v1/statistics/${date}`)
      .pipe(map((resp) => resp.data.data));
  }

  async history(type: string) {
    const data = await this.warModel
      .find()
      .sort({ day: 1 })
      .select({ day: 1, date: 1, stats: { [type]: 1 } })
      .exec();

    return of(data).pipe(
      map((data) =>
        data.map((record, index) => {
          const current = record.stats[type];
          const prev = data[index - 1] ? data[index - 1].stats[type] : 0;
          return {
            day: record.day,
            date: record.date,
            increase: current > prev ? current - prev : prev - current,
          };
        }),
      ),
    );
  }

  async sync() {
    const data = await this.warModel.find().sort({ day: -1 }).limit(1).exec();

    const lastDate = new Date(data[0].date);
    lastDate.setDate(lastDate.getDate() + 1);
    const nextDate = lastDate.toISOString().split('T')[0];

    return this.getStatistics(nextDate).pipe(
      map((data) => {
        this.warModel.create(data);
        return data;
      }),
    );
  }
}
