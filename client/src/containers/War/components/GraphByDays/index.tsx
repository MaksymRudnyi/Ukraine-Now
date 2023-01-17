import { Loader } from '../../../../components';
import { GraphByDaysView } from './view';
import { FC } from 'react';
import { Grid, Center } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { API } from '../../../../constants';

type GraphByDaysProps = {
  type: string;
};

export const GraphByDays: FC<GraphByDaysProps> = ({ type }) => {
  const { isLoading, error, data } = useQuery('warHistory', () =>
    fetch(`${API}/war/history`).then((res) => res.json())
  );

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
      <GraphByDaysView history={data} type={type} />
    </Grid>
  );
};
