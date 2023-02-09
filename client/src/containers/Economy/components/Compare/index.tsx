import { Grid, GridItem } from '@chakra-ui/react';
import { Chart } from './components/Chart';
import { Table } from './components/Table';

export const Compare = ({ indicator, unit, title }) => {
  return (
    <Grid
      templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(6, 1fr)']}
      gap={4}
      mb={4}
    >
      <GridItem colSpan={[4]} overflow={'hidden'}>
        <Chart indicator={indicator} country={'ua'} unit={unit} title={title} />
      </GridItem>
      <GridItem colSpan={[2]} overflow={'hidden'}>
        <Table indicator={indicator} unit={unit} />
      </GridItem>
    </Grid>
  );
};
