// Інфляція
import { Action, Card } from '../../../../components';
import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { WORLD_BANK_INDICATOR } from '../../constants';

// Source: https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=UA

export const Inflation = ({ onData }) => {
  const { t } = useTranslation();
  const { isLoading, error, data } = useQuery('FP.CPI.TOTL.ZG', () =>
    fetch(
      `https://api.worldbank.org/v2/country/ua/indicator/FP.CPI.TOTL.ZG?format=json`
    ).then((res) => res.json())
  );
  const title = t('economy.inflation');

  const byYears = useMemo(() => {
    if (!data) {
      return [];
    }

    return data[1].filter((item) => item.value).slice(0, -3);
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
      indicator: WORLD_BANK_INDICATOR.INFLATION,
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
