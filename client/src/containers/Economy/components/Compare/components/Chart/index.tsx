import { Fetch } from '../../../Fetch';
import { ChartYear, Paper } from '../../../../../../components';
import { useState, useEffect } from 'react';
import { Center } from '@chakra-ui/react';

export const Chart = ({ indicator, country, unit, title }) => {
  const [indicatorChanged, setIndicatorChanged] = useState(false);

  useEffect(() => {
    setIndicatorChanged(true);
    setTimeout(() => {
      setIndicatorChanged(false);
    }, 500);
  }, [indicator]);

  if (indicatorChanged) {
    return (
      <Center minH={'400px'}>
        <div>Loading</div>
      </Center>
    );
  }
  return (
    <Fetch country={country} indicator={indicator}>
      {({ data, isLoading, error }) => {
        const countrySeries = {
          name: 'economy.ukraine',
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
