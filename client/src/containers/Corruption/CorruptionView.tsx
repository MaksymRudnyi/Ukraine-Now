import { Action, Card } from '../../components';
import { UKRAINE_ISO } from '../../constants';
import { CorruptionGraph } from './Graph';
import { CorruptionTable } from './Table';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

type CorruptionViewProps = {
  corruption;
};
enum CORRUPTION_INDEX {
  SCORE,
  RANK
  };


export const CorruptionView: FC<CorruptionViewProps> = ({ corruption }) => {
  const { t } = useTranslation();
  const [isScoreActive, setIsScoreActive] = useState(true);
  const [compareCountry, setCompareCountry] = useState('');
  const [selectedId, setSelectedId] = useState<CORRUPTION_INDEX>(CORRUPTION_INDEX.SCORE);

  const ukraine = corruption
    .filter(({ iso3 }) => iso3 === UKRAINE_ISO)
    .sort((a, b) => b.year! - a.year!);
  const comparedCountry = corruption
    ?.filter(({ iso3 }) => iso3 === compareCountry)
    ?.sort((a, b) => b.year! - a.year!);

  const ukraineThisYear = ukraine[0];

  const corruptionThisYear = corruption.filter(
    (item) => item.year === ukraineThisYear.year
  );

  const series = [
    {
      name: 'Ukraine',
      data: ukraine.map((item) => ({
        y: isScoreActive ? item.score! : item.rank!,
        x: item.year,
      })),
    },
  ];

  if (comparedCountry.length) {
    series.push({
      name: comparedCountry[0].country!,
      data: comparedCountry.map((item) => ({
        y: isScoreActive ? item.score! : item.rank!,
        x: item.year,
      })),
    });
  }

  const onRowClick = (row) => {
    setCompareCountry(row.iso3 === compareCountry ? '' : row.iso3);
  };

  const onActiveStateHandler = (corruption_index: CORRUPTION_INDEX) => {
    setIsScoreActive(false); 
    setSelectedId(corruption_index);
  };

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']}
      gap={4}
      mb={4}
    >
      <GridItem w="100%">
        <Box mb={4} cursor={'pointer'}  onClick={() => onActiveStateHandler(CORRUPTION_INDEX.SCORE)} >
          <Card // TODO calculate the total number of countires instead of 180
            value={<Action>{`${ukraineThisYear.rank} / 180`}</Action>}
            title={t('corruption.rank')}
            isActive={selectedId === (CORRUPTION_INDEX.SCORE)}
          />
        </Box>

        <Box cursor={'pointer'}  onClick={() => onActiveStateHandler(CORRUPTION_INDEX.RANK)}>
          <Card
            value={<Action>{`${ukraineThisYear.score} / 100`}</Action>}
            title={t('corruption.score')}
            isActive={selectedId === (CORRUPTION_INDEX.RANK)}
          />
        </Box>
      </GridItem>

      <GridItem colSpan={[1, 1, 2]} w="100%" overflow={'hidden'}>
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
