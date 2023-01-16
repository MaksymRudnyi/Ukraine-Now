import { Loader } from '../../../components';
import { CurrencyByDatesView } from './CurrencyByDatesView';
import { API } from '../../../constants';

import { FC } from 'react';
import { useQuery } from 'react-query';

type CurrencyByDatesProps = {
  valcode: string;
};

export const CurrencyByDates: FC<CurrencyByDatesProps> = ({ valcode }) => {
  const today = new Date();
  const yearAgo = new Date(
    new Date().setFullYear(new Date().getFullYear() - 1)
  );

  const endDate = `${today.getFullYear()}${
    today.getMonth() + 1
  }${`0${today.getDate()}`.slice(-2)}`;
  const startDate = `${yearAgo.getFullYear()}${
    yearAgo.getMonth() + 1
  }${`0${yearAgo.getDate()}`.slice(-2)}`;

  const { isLoading, error, data } = useQuery('exchange', () =>
    fetch(
      `${API}/currency?start=${startDate}&end=${endDate}&valcode=${valcode}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error.</div>;
  }

  return <CurrencyByDatesView currencyByDates={data} />;
};
