import { CurrencyByDates, OccupiedView, WarDaysCounterView } from '..';
import { Loader, ModalWindow, InternalLink, Card } from '../../components';
import { UKRAINE_ISO } from '../../constants';
import { CorruptionGraph } from './Graph';
import { CorruptionTable } from './Table';
import { GetCorruption_corruption } from './__generated__/GetCorruption';
import { SeriesType } from './interfaces';
import { Box, Grid, GridItem, useDisclosure } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

type CorruptionViewProps = {
  corruption: GetCorruption_corruption[];
};

export const CorruptionView: FC<CorruptionViewProps> = ({ corruption }) => {
  const { t } = useTranslation();
  const [isScoreActive, setIsScoreActive] = useState(true);
  const [compareCountry, setCompareCountry] = useState('');
  const ukraine = corruption
    .filter(({ iso3 }) => iso3 === UKRAINE_ISO)
    .sort((a, b) => b.year! - a.year!);
  const comparedCountry = corruption
    .filter(({ iso3 }) => iso3 === compareCountry)
    .sort((a, b) => b.year! - a.year!);

  const ukraineThisYear = ukraine[0];

  const corruptionThisYear = corruption.filter(
    (item) => item.year === ukraineThisYear.year
  );

  const series: SeriesType[] = [
    {
      name: 'Ukraine',
      data: ukraine.map((item) => ({
        y: isScoreActive ? item.score : item.rank,
        x: item.year,
      })),
    },
  ];

  if (comparedCountry.length) {
    console.log('comparedCountry: ', comparedCountry);

    series.push({
      name: comparedCountry[0].country!,
      data: comparedCountry.map((item) => ({
        y: isScoreActive ? item.score : item.rank,
        x: item.year,
      })),
    });
  }

  const onRowClick = (row: GetCorruption_corruption) => {
    console.log('row: ', row);
    setCompareCountry(row.iso3 === compareCountry ? '' : row.iso3);
  };

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
      gap={4}
    >
      <GridItem w="100%" onClick={() => setIsScoreActive(false)}>
        <Box mb={4}>
          <Card value={ukraineThisYear.rank} title={t('corruption.rank')} />
        </Box>

        <Card value={ukraineThisYear.score} title={t('corruption.score')} />
      </GridItem>

      <GridItem colSpan={[1, 1, 2]} w="100%">
        <CorruptionGraph
          series={series}
          title={`${t('corruption.corruption_perceptions_index')}. ${
            isScoreActive ? t('corruption.score') : t('corruption.rank')
          }`}
          yAxis={isScoreActive ? t('corruption.score') : t('corruption.rank')}
        />
      </GridItem>

      <GridItem w="100%" onClick={() => setIsScoreActive(true)}>
        <CorruptionTable
          corruption={corruptionThisYear}
          onRowClick={onRowClick}
        />
      </GridItem>
    </Grid>
  );
};
