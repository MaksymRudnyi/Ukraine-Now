import {
  GeneralInfoData,
  OccupiedView,
  WarDaysCounterView,
  Map,
} from '../../containers';
import { Grid, GridItem } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <GeneralInfoData>
      {({ occupied }) => (
        <Grid
          templateColumns={[
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(5, 1fr)',
          ]}
          gap={4}
        >
          <GridItem colSpan={[2, 2, 3]} w="100%">
            <Map />
          </GridItem>
          <GridItem w="100%">
            <OccupiedView occupied={occupied} />
          </GridItem>
          <GridItem w="100%">
            <WarDaysCounterView />
          </GridItem>
        </Grid>
      )}
    </GeneralInfoData>
  );
};
