import {CurrencyByDates, OccupiedView, WarDaysCounterView} from '..';
import { Loader, ModalWindow, InternalLink, Card } from '../../components';
import { GetCorruption_corruption } from './__generated__/GetCorruption';
import {Box, Grid, GridItem, useDisclosure} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { UKRAINE_ISO } from '../../constants';
import {CorruptionGraph} from './Graph';
import { SeriesType } from './interfaces';
import { useTranslation } from 'react-i18next';
import { CorruptionTable } from './Table';

type CorruptionViewProps = {
  corruption: GetCorruption_corruption[];
};

export const CorruptionView: FC<CorruptionViewProps> = ({
                                                          corruption,
}) => {
  const { t } = useTranslation();
  const [isScoreActive, setIsScoreActive] = useState(true)
  const ukraine = corruption.filter(({ iso3 }) => iso3 === UKRAINE_ISO).sort((a, b) => b.year! - a.year!)
  const ukraineThisYear = ukraine[0];

  const corruptionThisYear = corruption.filter((item) => item.year === 2021)

  const series: SeriesType[] = [{
    name: 'Ukraine',
    data: ukraine.map((item) => ({ y: isScoreActive ? item.score : item.rank, x: item.year })),
  }];

  return (
    <Grid
      templateColumns={[
        'repeat(1, 1fr)',
        'repeat(2, 1fr)',
        'repeat(4, 1fr)',
      ]}
      gap={4}
    >
      <GridItem w="100%" onClick={() => setIsScoreActive(false)}>
        <Box mb={4}>
          <Card value={ukraineThisYear.rank} title={t('corruption.rank')}/>
        </Box>

        <Card value={ukraineThisYear.score} title={t('corruption.score')}/>
      </GridItem>

      <GridItem colSpan={[1, 1, 2]} w="100%">
        <CorruptionGraph
          series={series}
          title={`${t('corruption.corruption_perceptions_index')}. ${isScoreActive ? t('corruption.score'): t('corruption.rank')}` }
          yAxis={isScoreActive ? t('corruption.score'): t('corruption.rank')}/>
      </GridItem>

      <GridItem w="100%" onClick={() => setIsScoreActive(true)}>
        <CorruptionTable corruption={corruptionThisYear}/>
      </GridItem>
    </Grid>
  );
};
