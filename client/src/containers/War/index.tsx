import { QueryData, Title, SubTitle } from '../../components';
import { GET_WAR_LATEST } from './queries';
import { useTranslation } from 'react-i18next';
import {  WarView } from './WarView';
import {Grid, GridItem} from "@chakra-ui/react";
import {OccupiedView, WarDaysCounterView} from "./components";

export const War = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('war.title')}</Title>

      <Grid
        templateColumns={[
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
          'repeat(2, 1fr)',
        ]}
        gap={4}
        mb={4}
      >
        <GridItem w="100%">
          <OccupiedView/>
        </GridItem>
        <GridItem w="100%">
          <WarDaysCounterView />
        </GridItem>
      </Grid>

      <SubTitle>{t('war.sub_title')}</SubTitle>

      <QueryData query={GET_WAR_LATEST}>
        {({ warLatest }) => <WarView stats={warLatest.stats} increase={warLatest.increase}/>}
      </QueryData>


    </>
  );
};
