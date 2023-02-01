// ВВП на душу населення
import { Action, Card } from '../../../../components';
import { useEffect, useMemo } from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';

// Source: https://data.worldbank.org/indicator/NY.GDP.PCAP.CD?end=2021&locations=UA&start=1987&view=chart

export const GDPperCapita = ({ onData }) => {
  const { t } = useTranslation();
  const { isLoading, error, data } = useQuery('NY.GDP.PCAP.CD', () =>
    fetch(
      `https://api.worldbank.org/v2/country/ua/indicator/NY.GDP.PCAP.CD?format=json`
    ).then((res) => res.json())
  );
  const title = t('economy.GDP_per_capita');

  const gdpPerCapByYears = useMemo(() => {
    if (!data) {
      return [];
    }

    return data[1].filter((item) => item.value && +item.date > 1995);
  }, [data]);

  const onClick = () => {
    onData({
      title,
      unit: '$',
      data: gdpPerCapByYears,
    });
  };

  useEffect(() => {
    data && onClick();
  }, [data]);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error.</div>;
  }

  return (
    <Box cursor={'pointer'} height={'100%'} onClick={onClick}>
      <Card
        value={<Action>{`$${gdpPerCapByYears[0]?.value?.toFixed(2)}`}</Action>}
        title={title}
        helpText={t('economy.year', { year: gdpPerCapByYears[0].date })}
      />
    </Box>
  );
};
