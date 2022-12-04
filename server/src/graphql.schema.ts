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
  _(): Nullable<string> | Promise<Nullable<string>>;
}

export interface Currency {
  r030?: Nullable<number>;
  txt?: Nullable<string>;
  rate: number;
  cc: string;
  exchangedate: string;
}

export interface IMutation {
  _(): Nullable<string> | Promise<Nullable<string>>;
}

type Nullable<T> = T | null;
