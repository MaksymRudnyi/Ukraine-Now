/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum CacheControlScope {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}

export interface IQuery {
  currencyToday():
    | Nullable<Nullable<Currency>[]>
    | Promise<Nullable<Nullable<Currency>[]>>;
  currencyByDates(
    startDate?: Nullable<string>,
    endDate?: Nullable<string>,
    valcode?: Nullable<string>,
  ): Nullable<Nullable<Currency>[]> | Promise<Nullable<Nullable<Currency>[]>>;
  _(): Nullable<string> | Promise<Nullable<string>>;
}

export interface Currency {
  r030?: Nullable<number>;
  txt?: Nullable<string>;
  rate: number;
  cc: string;
  exchangedate: string;
  enname?: Nullable<string>;
  units?: Nullable<number>;
  rate_per_unit?: Nullable<number>;
  group?: Nullable<string>;
  calcdate?: Nullable<string>;
}

export interface IMutation {
  _(): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
