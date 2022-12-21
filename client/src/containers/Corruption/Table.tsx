import { Paper, Action } from '../../components';
import { Table } from '../../components/Table';
import { UKRAINE_ISO } from '../../constants';
import { GetCorruption_corruption } from './__generated__/GetCorruption';
import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { FC, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type CurruptionTableProps = {
  corruption: GetCorruption_corruption[];
  onRowClick?: Function;
};

export const CorruptionTable: FC<CurruptionTableProps> = observer(
  ({ corruption, onRowClick }) => {
    const ukraineRef = useRef<HTMLTableRowElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
      if (ukraineRef.current) {
        ukraineRef.current.scrollIntoView();
      }
    }, []);

    const columns = [
      {
        id: 'score',
        accessorKey: 'score',
        header: <Action>{t('corruption.score')}</Action>,
        size: 58,
      },
      {
        id: 'country',
        accessorKey: 'country',
        header: <Action>{t('corruption.country')}</Action>,
        cell: (info) => info.getValue(),
        align: 'right',
      },
      {
        id: 'rank',
        accessorKey: 'rank',
        header: <Action>{t('corruption.rank')}</Action>,
        cell: (info) => info.getValue(),
        size: 74,
      },
    ];

    const selectedFn = (row) => {
      return row.iso3 === UKRAINE_ISO;
    };

    return (
      <Paper>
        <Table
          data={corruption}
          columns={columns}
          selectedFn={selectedFn}
          onRowClick={onRowClick}
        />
      </Paper>
    );
  }
);
