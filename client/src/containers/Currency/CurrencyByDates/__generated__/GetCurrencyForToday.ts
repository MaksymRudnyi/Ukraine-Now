/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrencyForToday
// ====================================================

export interface GetCurrencyForToday_currencyToday {
  __typename: 'Currency';
  exchangedate: string;
  cc: string;
  txt: string | null;
  r030: number | null;
  rate: number;
}

export interface GetCurrencyForToday {
  currencyToday: (GetCurrencyForToday_currencyToday | null)[] | null;
}
