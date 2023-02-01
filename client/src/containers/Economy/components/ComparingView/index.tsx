import { Grid, GridItem } from '@chakra-ui/react';
import { ChartYear, SubTitle } from '../../../../components';

export const ComparingView = ({ title, data, unit }) => {
  return (
    <>
      <SubTitle>{title}</SubTitle>
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)']}
        gap={4}
        mb={4}
      >
        <GridItem overflow={'hidden'}>
          <ChartYear
            title={`${title}, (${unit})`}
            yAxis={unit}
            series={[data]}
          />
        </GridItem>
      </Grid>
    </>
  );
};
