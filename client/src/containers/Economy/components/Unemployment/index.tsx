// Безробіття
import { Action, Card, Error, Loader } from '../../../../components';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { WORLD_BANK_INDICATOR } from '../../constants';
import { Fetch } from '../Fetch';

// Source: https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG?locations=UA

export const Unemployment = ({ onData, isActive }) => {
  const { t } = useTranslation();
  const title = t('economy.unemployment');

  const onClick = () => {
    onData({
      title,
      unit: '%',
      indicator: WORLD_BANK_INDICATOR.UNEMPLOYMENT,
    });
  };

  return (
    <Fetch country={'ua'} indicator={WORLD_BANK_INDICATOR.UNEMPLOYMENT}>
      {({ data, isLoading, isError }) => {
        if (isLoading) {
          return <Loader />;
        }

        if (isError) {
          return <Error />;
        }

        return (
          <Box cursor={'pointer'} height={'100%'} onClick={onClick}>
            <Card
              value={<Action>{`${data[0]?.value?.toFixed(2)}%`}</Action>}
              title={title}
              helpText={t('economy.year', { year: data[0].date })}
              isActive={isActive}
            />
          </Box>
        );
      }}
    </Fetch>
  );
};
