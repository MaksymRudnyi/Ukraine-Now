import { Box, Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Card } from '../../components';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Grid
      templateColumns={['repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(5, 1fr)']}
      gap={4}
    >
      <GridItem colSpan={[2, 2, 3]} w="100%" h="10" bg="blue.500" />
      <GridItem w="100%">
        <Card />
      </GridItem>
      <GridItem w="100%" h="10" bg="blue.500" />
    </Grid>
  );
};
