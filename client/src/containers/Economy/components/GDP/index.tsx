// Номінальний ВВП
import { Action, Card, Loader, Error } from '../../../../components';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { WORLD_BANK_INDICATOR } from '../../constants';
import { Fetch } from '../Fetch';
import { useNumThousands } from '../../../../../src/hooks/useNumThousands'

import { Container } from './Container';
// const useFormatValue = (value) => {
//   const formattedValue = useNumThousands(value);
//   return formattedValue;
// };

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
          <Container data={data} title={title} onClick={onClick}/>
        );
      }}
    </Fetch>
  );
};
