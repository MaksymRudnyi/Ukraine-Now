import { Title } from '../../components';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import { useState } from 'react';

import {
  GDPperCapita,
  GDP,
  Inflation,
  Unemployment,
  GDPGrowth,
  ComparingView,
} from './components';

export const Economy = () => {
  const { t } = useTranslation();
  const [series, setSeries] = useState();
  const [title, setTitle] = useState('');
  const [unit, setUnit] = useState('');

  const onData = ({ title, unit, data }) => {
    setSeries(undefined);

    const series = {
      name: t('economy.ukraine'),
      data: data.map((item) => ({
        x: +item.date,
        y: +item.value.toFixed(2),
      })),
    };

    // @ts-ignore
    setSeries(series);
    setTitle(title);
    setUnit(unit);
  };

  return (
    <Box id={'economy'} mb={4}>
      <Title>{t('economy.title')}</Title>

      <Grid
        templateColumns={[
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(3, 1fr)',
          'repeat(5, 1fr)',
        ]}
        gap={4}
        mb={4}
      >
        <GridItem>
          <GDPperCapita onData={onData} />
        </GridItem>
        <GridItem>
          <GDP onData={onData} />
        </GridItem>
        <GridItem>
          <GDPGrowth onData={onData} />
        </GridItem>
        <GridItem>
          <Inflation onData={onData} />
        </GridItem>
        <GridItem>
          <Unemployment onData={onData} />
        </GridItem>
      </Grid>

      {series ? (
        <ComparingView data={series} title={title} unit={unit} />
      ) : null}
    </Box>
  );
};
