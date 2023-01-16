import { Title, SubTitle, Loader } from '../../components';
import { useTranslation } from 'react-i18next';
import { WarView } from './WarView';
import { Grid, GridItem } from '@chakra-ui/react';
import { OccupiedView, WarDaysCounterView } from './components';
import { useQuery } from 'react-query';

export const War = () => {
  const { t } = useTranslation();
  const { isLoading, error, data } = useQuery('warStatistics', () =>
    fetch(`https://russianwarship.rip/api/v1/statistics/latest`)
      .then((res) => res.json())
      .then((res) => res.data)
  );

  return (
    <>
      <Title>{t('war.title')}</Title>

      <Grid
        templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)']}
        gap={4}
        mb={4}
      >
        <GridItem w="100%">
          <OccupiedView />
        </GridItem>
        <GridItem w="100%">
          <WarDaysCounterView />
        </GridItem>
      </Grid>

      <SubTitle>{t('war.sub_title')}</SubTitle>

      {error ? <div>Error</div> : null}

      {isLoading ? (
        <Loader />
      ) : (
        <WarView stats={data.stats} increase={data.increase} />
      )}
    </>
  );
};
