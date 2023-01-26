import { Loader, Title } from '../../components';
import { CorruptionView } from './CorruptionView';
// import { GET_CORRUPTION } from './queries';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import React from 'react';
import { API } from '../../constants';
import { Box } from '@chakra-ui/react';

export const Corruption = () => {
  const { t } = useTranslation();
  const { isLoading, error, data } = useQuery('corruption', () =>
    fetch(`${API}/corruption`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error.</div>;
  }

  return (
    <Box id={'corruption'}>
      <Title>{t('corruption.corruption_perceptions_index')}</Title>
      <CorruptionView corruption={data} />
    </Box>
  );
};
