import { QueryData } from '../../../components';
import { CurrencyByDatesView } from './CurrencyByDatesView';
import { GetCurrencyByDatesVariables } from './__generated__/GetCurrencyByDates';
import { GET_CURRENCY_BY_DATES } from './queries';
import { FC } from 'react';

export const CurrencyByDates: FC<GetCurrencyByDatesVariables> = ({
  valcode,
}) => {
  const today = new Date();
  const yearAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );

  const variables = {
    endDate: `${today.getFullYear()}${
      today.getMonth() + 1
    }${`0${today.getDate()}`.slice(-2)}`,
    startDate: `${yearAgo.getFullYear()}${
      yearAgo.getMonth() + 1
    }${`0${yearAgo.getDate()}`.slice(-2)}`,
    valcode,
  };

  return (
    <QueryData query={GET_CURRENCY_BY_DATES} variables={variables}>
      {({ currencyByDates }) => (
        <CurrencyByDatesView currencyByDates={currencyByDates} />
      )}
    </QueryData>
  );
};
