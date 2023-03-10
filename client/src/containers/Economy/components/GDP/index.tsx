// Номінальний ВВП
import { Action, Card, Loader, Error } from '../../../../components';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { WORLD_BANK_INDICATOR } from '../../constants';
import { Fetch } from '../Fetch';

// Source: https://data.worldbank.org/indicator/NY.GDP.MKTP.CD?locations=UA

export const GDP = ({ onData }) => {
  const { t } = useTranslation();
  const title = t('economy.GDP');

  const onClick = () => {
    onData({
      title,
      unit: '$',
      indicator: WORLD_BANK_INDICATOR.GDP,
    });
  };

  const changeNumberFormat = (val) => {
    
    // Nine Zeroes for Billions
    const changedNum =  Math.abs(Number(val)) >= 1.0e+9

    ? (Math.abs(Number(val)) / 1.0e+9).toFixed(2) + " billion"
    // Six Zeroes for Millions 
    : Math.abs(Number(val)) >= 1.0e+6

    ? (Math.abs(Number(val)) / 1.0e+6).toFixed(2) + " million"
    // Three Zeroes for Thousands
    : Math.abs(Number(val)) >= 1.0e+3

    ? (Math.abs(Number(val)) / 1.0e+3).toFixed(2) + " thousands"

    : Math.abs(Number(val));
    return changedNum;

  }

  return (
    <Fetch country={'ua'} indicator={WORLD_BANK_INDICATOR.GDP}>
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
              // value={<Action>{`$${data[0]?.value?.toFixed(2)}`}</Action>}
              // changeNumberFormat(data[0])
              value={<Action>{`${changeNumberFormat(data[0].value)}`}</Action>}
              title={title}
              helpText={t('economy.year', { year: data[0].date })}
            />
          </Box>
        );
      }}
    </Fetch>
  );
};
