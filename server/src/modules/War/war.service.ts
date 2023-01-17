import { Injectable } from '@nestjs/common';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { Observable, map, of, forkJoin } from 'rxjs';
import { AxiosResponse } from 'axios';
import { War } from './war.interface';
// import { War as WarModel, WarDocument } from './schemas/war.schema';
import { firestore, database } from 'firebase-admin';
import DocumentSnapshot = firestore.DocumentSnapshot;
import QuerySnapshot = firestore.QuerySnapshot;

@Injectable()
export class WarService {
  private collection: FirebaseFirestore.CollectionReference<FirebaseFirestore.DocumentData>;

  constructor(private readonly httpService: HttpService) {
    this.collection = firestore().collection('wars');
  }

  getLatest(): Observable<AxiosResponse<War>> {
    return this.httpService
      .get('https://russianwarship.rip/api/v1/statistics/latest')
      .pipe(map((resp) => resp.data.data));
  }

  getStatistics(offset: number) {
    return this.httpService
      .get(
        `https://russianwarship.rip/api/v1/statistics?offset=${offset}&limit=50`,
      )
      .pipe(map((resp) => resp.data.data));
  }

  async history() {
    const snapshot = await this.collection.orderBy('day', 'asc').get();

    return of(snapshot).pipe(
      map((data) => {
        const records = [];

        data.forEach((record) => {
          records.push(record.data());
        });

        return records;
      }),
    );
    // return of(snapshot).pipe(
    //   map((record) => record.data())
    // )
    // const data = await this.warModel
    //   .find()
    //   .sort({ day: 1 })
    //   .select({ day: 1, date: 1, stats: { [type]: 1 } })
    //   .exec();
    //
    // return of(data).pipe(
    //   map((data) =>
    //     data.map((record, index) => {
    //       const current = record.stats[type];
    //       const prev = data[index - 1] ? data[index - 1].stats[type] : 0;
    //       return {
    //         day: record.day,
    //         date: record.date,
    //         increase: current > prev ? current - prev : prev - current,
    //       };
    //     }),
    //   ),
    // );
  }

  async create() {}
  // async create() {
  //   return forkJoin([
  //     this.getStatistics(0),
  //     this.getStatistics(50),
  //     this.getStatistics(100),
  //     this.getStatistics(150),
  //     this.getStatistics(200),
  //     this.getStatistics(250),
  //     this.getStatistics(300)
  //   ]).pipe(map(
  //     data => {
  //       // data.forEach((portion) => console.log('portion:', portion))
  //       data.forEach((portion) => portion.records.map((record) => this.collection.add(record)))
  //     }
  //   ))
  // }
}
