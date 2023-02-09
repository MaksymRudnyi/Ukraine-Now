// Ріст ВВП
import { Action, Card } from '../../../../components';
import { useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { WORLD_BANK_INDICATOR } from '../../constants';

// Source: https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=UA

export const GDPGrowth = ({ onData }) => {
  const { t } = useTranslation();
  const { isLoading, error, data } = useQuery('NY.GDP.MKTP.KD.ZG', () =>
    fetch(
      `https://api.worldbank.org/v2/country/ua/indicator/NY.GDP.MKTP.KD.ZG?format=json`
    ).then((res) => res.json())
  );
  const title = t('economy.GDP_growth');

  const gdpByYears = useMemo(() => {
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
      data: gdpByYears,
      indicator: WORLD_BANK_INDICATOR.GDP_GROWTH,
    });
  };

  return (
    <Box cursor={'pointer'} height={'100%'} onClick={onClick}>
      <Card
        value={<Action>{`${gdpByYears[0]?.value?.toFixed(2)}%`}</Action>}
        title={title}
        helpText={t('economy.year', { year: gdpByYears[0].date })}
      />
    </Box>
  );
};
