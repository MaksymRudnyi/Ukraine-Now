import { Paper, Action } from '../../components';
import { Table } from '../../components/Table';
import { UKRAINE_ISO } from '../../constants';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import store from '../../store';

type CurruptionTableProps = {
  corruption;
  onRowClick?: Function;
};

export const CorruptionTable: FC<CurruptionTableProps> = observer(
  ({ corruption, onRowClick }) => {
    const { t } = useTranslation();
    const { countries } = store.UI;

    const columns = [
      {
        id: 'score',
        accessorKey: 'score',
        header: <Action>{t('corruption.score')}</Action>,
        size: 58,
      },
      {
        id: 'iso3',
        accessorKey: 'iso3',
        header: <Action>{t('corruption.country')}</Action>,
        cell: (info) => {
          const country = info.getValue()?.toLowerCase();
          return countries[country] || info?.row?.original?.country || country;
        },
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
