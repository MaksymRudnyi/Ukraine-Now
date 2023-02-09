import { Fetch } from '../../../Fetch';
import { ChartYear, Loader } from '../../../../../../components';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Chart = ({ indicator, country, unit, title }) => {
  const [indicatorChanged, setIndicatorChanged] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIndicatorChanged(true);
    setTimeout(() => {
      setIndicatorChanged(false);
    }, 500);
  }, [indicator]);

  if (indicatorChanged) {
    return <Loader container={{ minH: '400px' }} />;
  }
  return (
    <Fetch country={country} indicator={indicator}>
      {({ data, isLoading, error }) => {
        const countrySeries = {
          name: t('ukraine'),
          data: data.map((item) => ({
            x: +item.date,
            y: +item.value.toFixed(2),
          })),
        };

        const series = [countrySeries];

        if (isLoading) {
          return 'loading...';
        }

        if (error) {
          return 'error';
        }

        return (
          <ChartYear
            title={`${title}, (${unit})`}
            yAxis={unit}
            series={series}
          />
        );
      }}
    </Fetch>
  );
};
