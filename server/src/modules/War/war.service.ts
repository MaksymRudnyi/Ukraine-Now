import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable, map, of, forkJoin } from 'rxjs';
import { AxiosResponse } from 'axios';
import { War } from './war.interface';
import { firestore } from 'firebase-admin';

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

  getStatisticsByDate(date: string) {
    return this.httpService
      .get(`https://russianwarship.rip/api/v1/statistics/${date}`)
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
  }

  async sync() {
    let theLastRecord;
    const snapshot = await this.collection
      .orderBy('day', 'desc')
      .limit(1)
      .get();

    snapshot.forEach((record) => {
      theLastRecord = record.data();
    });

    const lastDate = new Date(theLastRecord.date);
    lastDate.setDate(lastDate.getDate() + 1);
    const nextDate = lastDate.toISOString().split('T')[0];

    return this.getStatisticsByDate(nextDate).pipe(
      map((data) => {
        this.collection.add(data);
        return data;
      }),
    );
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
