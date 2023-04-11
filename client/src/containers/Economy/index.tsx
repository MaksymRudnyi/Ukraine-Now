import { Title } from '../../components';
import { useTranslation } from 'react-i18next';
import { Grid, GridItem, Box } from '@chakra-ui/react';
import { useState } from 'react';
import { WORLD_BANK_INDICATOR } from './constants';

import {
  GDPperCapita,
  GDP,
  Inflation,
  Unemployment,
  GDPGrowth,
  Compare,
} from './components';

export const Economy = () => {
  const { t } = useTranslation();
  const [title, setTitle] = useState(t('economy.GDP_per_capita'));
  const [unit, setUnit] = useState('$');
  const [indicator, setIndicator] = useState(
    WORLD_BANK_INDICATOR.GDP_PER_CAPITA
  );

  const onData = ({ title, unit, indicator }) => {
    setIndicator(indicator || WORLD_BANK_INDICATOR.GDP_PER_CAPITA); // TODO check to remove OR
    setTitle(title);
    setUnit(unit);
  };
  
  const isElementActive = (el:string) => {
    return el === indicator;
  }
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
          <GDPperCapita onData={onData} isActive={ isElementActive(WORLD_BANK_INDICATOR.GDP_PER_CAPITA)}/>
        </GridItem >
        <GridItem>
          <GDP onData={onData}  isActive={ isElementActive(WORLD_BANK_INDICATOR.GDP)}/>
        </GridItem>
        <GridItem >
          <GDPGrowth onData={onData} isActive={isElementActive(WORLD_BANK_INDICATOR.GDP_GROWTH)} />
        </GridItem>
        <GridItem>
          <Inflation onData={onData} isActive={ isElementActive(WORLD_BANK_INDICATOR.INFLATION)}  />
        </GridItem>
        <GridItem>
          <Unemployment onData={onData} isActive={ isElementActive(WORLD_BANK_INDICATOR.UNEMPLOYMENT)} />
        </GridItem>
      </Grid>

      <Compare indicator={indicator} unit={unit} title={title} />
    </Box>
  );
};
