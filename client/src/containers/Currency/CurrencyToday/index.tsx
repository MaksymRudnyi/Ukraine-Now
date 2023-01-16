import { Loader } from '../../../components';
import { CurrencyTodayView } from './CurrencyTodayView';
import { useQuery } from 'react-query';

export const CurrencyToday = () => {
  const { isLoading, error, data } = useQuery('currencyToday', () =>
    fetch(
      `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }
  if (error) {
    return <div>Error</div>;
  }

  return <CurrencyTodayView currencyToday={data} />;
};
