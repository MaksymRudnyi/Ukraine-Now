import { Paper, Action } from '../../../../components';
import { Table } from '../../../../components/Table';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type WarTableTableProps = {
  history;
  type: string;
};

export const WarTable: FC<WarTableTableProps> = observer(
  ({ history, type }) => {
    const { t } = useTranslation();

    const columns = [
      {
        id: 'day',
        accessorKey: 'day',
        header: <Action>{t('war.table.day')}</Action>,
      },
      {
        id: 'date',
        accessorKey: 'date',
        header: <Action>{t('war.table.date')}</Action>,
        cell: (info) => info.getValue(),
        align: 'right',
      },
      {
        id: 'count',
        accessorKey: `increase`,
        header: <Action>{t('war.table.count')}</Action>,
        cell: (info) => info.getValue(),
      },
    ];

    return (
      <Paper>
        <Table
          data={history}
          columns={columns}
          styles={{ tableContainer: { maxH: 424 } }}
        />
      </Paper>
    );
  }
);
