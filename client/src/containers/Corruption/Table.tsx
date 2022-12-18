import { Table } from '../../components/Table';
import { GetCorruption_corruption } from './__generated__/GetCorruption';
import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { FC, useRef, useEffect } from 'react';

type CurruptionTableProps = {
  corruption: GetCorruption_corruption[];
  onRowClick?: Function;
};

export const CorruptionTable: FC<CurruptionTableProps> = observer(
  ({ corruption, onRowClick }) => {
    const ukraineRef = useRef<HTMLTableRowElement>(null);

    useEffect(() => {
      if (ukraineRef.current) {
        ukraineRef.current.scrollIntoView();
      }
    }, []);

    const columns = [
      {
        id: 'score',
        accessorKey: 'score',
        header: 'Score',
      },
      {
        id: 'country',
        accessorKey: 'country',
        header: 'Country',
        cell: (info) => info.getValue(),
        align: 'right',
      },
      {
        id: 'rank',
        accessorKey: 'rank',
        header: 'Rank',
        cell: (info) => info.getValue(),
      },
    ];

    const selectedFn = (row) => {
      return row.iso3 === 'UKR';
    };

    return (
      <Box>
        <Table
          data={corruption}
          columns={columns}
          selectedFn={selectedFn}
          onRowClick={onRowClick}
        />
      </Box>
    );
  }
);
