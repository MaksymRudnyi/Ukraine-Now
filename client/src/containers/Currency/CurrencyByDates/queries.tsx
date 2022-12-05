import { gql } from '@apollo/client';

export const GET_CURRENCY_BY_DATES = gql`
  query GetCurrencyByDates(
    $startDate: String!
    $endDate: String!
    $valcode: String!
  ) {
    currencyByDates(
      startDate: $startDate
      endDate: $endDate
      valcode: $valcode
    ) {
      exchangedate
      cc
      txt
      r030
      rate
    }
  }
`;
