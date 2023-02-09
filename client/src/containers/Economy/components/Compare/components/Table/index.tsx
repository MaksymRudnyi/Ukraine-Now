import { Fetch } from '../../../Fetch';
import { Action, ChartYear, Paper } from '../../../../../../components';
import { Table as GeneralTable } from '../../../../../../components/Table';
import { Center } from '@chakra-ui/react';

export const Table = ({ indicator }) => {
  return (
    <Fetch country={'all'} indicator={indicator}>
      {({ data, isLoading, error }) => {
        if (isLoading) {
          return <Center minH={'400px'}>loading...</Center>;
        }

        if (error) {
          return 'error';
        }

        const columns = [
          {
            id: 'countryiso3code',
            accessorKey: 'countryiso3code',
            header: <Action>countryiso3code</Action>,
          },
          {
            id: 'value',
            accessorKey: 'value',
            header: <Action>value</Action>,
            align: 'right',
          },
        ];

        return (
          <Paper>
            <GeneralTable data={data} columns={columns} />
          </Paper>
        );
      }}
    </Fetch>
  );
};
