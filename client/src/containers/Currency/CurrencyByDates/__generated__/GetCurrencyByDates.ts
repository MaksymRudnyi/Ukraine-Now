/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCurrencyByDates
// ====================================================

export interface GetCurrencyByDates_currencyByDates {
  __typename: 'Currency';
  exchangedate: string;
  cc: string;
  txt: string | null;
  r030: number | null;
  rate: number;
  enname: string | null;
}

export interface GetCurrencyByDates {
  currencyByDates: (GetCurrencyByDates_currencyByDates | null)[] | null;
}

export interface GetCurrencyByDatesVariables {
  startDate: string;
  endDate: string;
  valcode: string;
}
