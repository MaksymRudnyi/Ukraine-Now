import {
  Map,
  UkraineGeneralInfo,
  Helmet,
  Corruption,
  War,
  Economy,
} from '../../containers';
import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';

export const Home: FC = () => (
  <>
    <Helmet />
    <Grid
      id={'home'}
      templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(5, 1fr)']}
      gap={4}
      mb={4}
    >
      <GridItem colSpan={[2, 2, 3]} w="100%">
        <Map />
      </GridItem>

      <GridItem w="100%" colSpan={[2, 2, 2]}>
        <UkraineGeneralInfo />
      </GridItem>
    </Grid>

    <Corruption />
    <War />
    <Economy />
  </>
);
