import { Loader } from '../../../../components';
import { GraphByDaysView } from './graph';
import { WarTable } from './table';
import { FC, useMemo } from 'react';
import {
  Grid,
  Center,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { API } from '../../../../constants';
import { useTranslation } from 'react-i18next';

type GraphByDaysProps = {
  type: string;
};

export const GraphByDays: FC<GraphByDaysProps> = ({ type }) => {
  const { t } = useTranslation();
  const { isLoading, error, data } = useQuery('warHistory', () =>
    fetch(`${API}/war/history`).then((res) => res.json())
  );

  const history = useMemo(() => {
    if (!data) {
      return {};
    }

    return data?.map((record, index) => {
      const current = record.stats[type];
      const prev = data[index - 1] ? data[index - 1].stats[type] : 0;

      return {
        day: record.day,
        date: record.date,
        increase: current > prev ? current - prev : prev - current,
        value: current,
      };
    });
  }, [data, type]);

  if (!type) {
    return null;
  }

  if (isLoading) {
    return (
      <Center h={'400px'}>
        <Loader />
      </Center>
    );
  }

  if (error) {
    return <div>Error.</div>;
  }

  return (
    <Grid mt={4} templateColumns={['repeat(1, 1fr)']}>
      <Tabs overflow={'hidden'}>
        <TabList>
          <Tab>{t('war.tabs.graph')}</Tab>
          <Tab>{t('war.tabs.table')}</Tab>
        </TabList>

        <TabPanels overflow={'hidden'}>
          <TabPanel px={-4} overflow={'hidden'}>
            <GraphByDaysView history={history} type={type} />
          </TabPanel>
          <TabPanel px={-4}>
            <WarTable history={history} type={type} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Grid>
  );
};
