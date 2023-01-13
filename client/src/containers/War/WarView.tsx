import { Card, Action } from '../../components';
import { GetWarLatest_warLatest_stats } from './__generated__/GetWarLatest';
import { Text, Grid, GridItem, Box } from '@chakra-ui/react';
import { FC, useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { GraphByDays } from './components/';

type CorruptionViewProps = {
  stats: GetWarLatest_warLatest_stats;
  increase: GetWarLatest_warLatest_stats;
};

export const WarView: FC<CorruptionViewProps> = ({ stats, increase }) => {
  const { t } = useTranslation();
  const data = Object.entries(stats)
    .filter((item) => item[0] !== '__typename')
    .sort((a, b) => b[1] - a[1]);
  const [selectedType, setSelectedType] = useState<string>('');

  const onCardClick = useCallback(
    (type: string) => {
      setSelectedType(type !== selectedType ? type : '');
    },
    [selectedType]
  );

  return (
    <>
      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(5, 1fr)',
        ]}
        gap={4}
      >
        {data.map((item) => {
          const value = (
            <>
              <Action>{item[1]}</Action>
              {increase[item[0]] ? (
                <Text as={'span'} fontSize={'md'}>
                  {' '}
                  (+{increase[item[0]]})
                </Text>
              ) : null}
            </>
          );
          const title = t(`war.${item[0]}`);

          return (
            <GridItem
              key={item[0]}
              w="100%"
              onClick={() => onCardClick(item[0])}
            >
              <Box cursor={'pointer'}>
                <Card value={value} title={title} />
              </Box>
            </GridItem>
          );
        })}
      </Grid>

      <GraphByDays type={selectedType} />
    </>
  );
};
