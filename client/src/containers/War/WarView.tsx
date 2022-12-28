import { Card } from '../../components';
import { GetWarLatest_warLatest_stats } from './__generated__/GetWarLatest';
import { Text, Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type CorruptionViewProps = {
  stats: GetWarLatest_warLatest_stats;
  increase: GetWarLatest_warLatest_stats;
};

export const WarView: FC<CorruptionViewProps> = ({ stats, increase }) => {
  const { t } = useTranslation();
  const data = Object.entries(stats).filter(item => item[0] !== '__typename').sort((a, b) => b[1] - a[1]);

  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)', 'repeat(5, 1fr)']}
      gap={4}
    >
      {data.map((item) => {
        const value = (
          <>
            {item[1]}
            {increase[item[0]] ? <Text as={'span'} fontSize={'md'}> (+{increase[item[0]]})</Text> : null}
          </>
        )
        const title = t(`war.${item[0]}`);

        return (
          <GridItem key={item[0]} w="100%">
            <Card value={value} title={title}/>
        </GridItem>
        )})}
    </Grid>
  );
};