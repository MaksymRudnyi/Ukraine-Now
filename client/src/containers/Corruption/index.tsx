import { Loader, Title, Error } from '../../components';
import { CorruptionView } from './CorruptionView';
// import { GET_CORRUPTION } from './queries';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import React from 'react';
import { API } from '../../constants';
import { Box } from '@chakra-ui/react';
import axios from 'axios';

export const Corruption = () => {
  const { t } = useTranslation();
  const { isLoading, isError, data } = useQuery('corruption', () =>
    axios(`${API}/corruption`).then((res) => res.data)
  );

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Box id={'corruption'}>
      <Title>{t('corruption.corruption_perceptions_index')}</Title>
      <CorruptionView corruption={data} />
    </Box>
  );
};
