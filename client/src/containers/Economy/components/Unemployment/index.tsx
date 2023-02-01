// Безробіття
import { Action, Card } from '../../../../components';
import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

// Source: https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=UA

export const Unemployment = ({ onData }) => {
  const { t } = useTranslation();
  const { isLoading, error, data } = useQuery('SL.UEM.TOTL.ZS', () =>
    fetch(
      `https://api.worldbank.org/v2/country/ua/indicator/SL.UEM.TOTL.ZS?format=json`
    ).then((res) => res.json())
  );
  const title = t('economy.unemployment');

  const byYears = useMemo(() => {
    if (!data) {
      return [];
    }

    return data[1].filter((item) => item.value && +item.date > 1995);
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error.</div>;
  }

  const onClick = () => {
    onData({
      title,
      unit: '%',
      data: byYears,
    });
  };

  return (
    <Box cursor={'pointer'} height={'100%'} onClick={onClick}>
      <Card
        value={<Action>{`${byYears[0]?.value?.toFixed(2)}%`}</Action>}
        title={title}
        helpText={t('economy.year', { year: byYears[0].date })}
      />
    </Box>
  );
};
