import { Fetch } from '../../../Fetch';
import { Action, Loader, Paper } from '../../../../../../components';
import { Table as GeneralTable } from '../../../../../../components/Table';
import { useTranslation } from 'react-i18next';

export const Table = ({ indicator, unit }) => {
  const { t } = useTranslation();

  return (
    <Fetch country={'all'} indicator={indicator}>
      {({ data, isLoading, error }) => {
        if (isLoading) {
          return <Loader container={{ minH: '400px' }} />;
        }

        if (error) {
          return 'error';
        }

        const columns = [
          {
            id: 'countryiso3code',
            accessorKey: 'countryiso3code',
            header: <Action>{t('economy.table.country')}</Action>,
          },
          {
            id: 'value',
            accessorKey: 'value',
            header: (
              <Action>
                {t('economy.table.value')}, ({unit})
              </Action>
            ),
            cell: (info) => info.getValue()?.toFixed(2),
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
