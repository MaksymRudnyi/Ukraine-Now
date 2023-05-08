import { Fetch } from '../../../Fetch';
import { Action, Loader, Paper } from '../../../../../../components';
import { Table as GeneralTable } from '../../../../../../components/Table';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import store from '../../../../../../store';
import { UKRAINE_ISO } from '../../../../../../constants';
import { couldStartTrivia } from 'typescript';

type TableProps = {
  indicator: string;
  unit: string;
};

export const Table: FC<TableProps> = observer(({ indicator, unit }) => {
  const { t } = useTranslation();
  const { countries } = store.UI;

  return (
    <Fetch country={'all'} indicator={indicator}>
      {({ data, isLoading, error }) => {
        const countriesAll =  JSON.parse(JSON.stringify(countries));
        const dataFiltered = data.filter(obj => obj.countryiso3code.toLowerCase() in countriesAll);
       
        if (isLoading) {
          return <Loader container={{ minH: '400px' }} />;
        }

        if (error) {
          return 'error';
        }

        const selectedFn = (row) => {
          return row.countryiso3code === UKRAINE_ISO;
        };

        const columns = [
          {
            id: 'countryiso3code',
            accessorKey: 'countryiso3code',
            header: <Action>{t('economy.table.country')}</Action>,
            cell: (info) => {
              const country = info.getValue()?.toLowerCase();
              return (
                countries[country] ||
                info?.row?.original?.country?.value ||
                country
              );
            },
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
            <GeneralTable
              data={dataFiltered}
              columns={columns}
              selectedFn={selectedFn}
            />
          </Paper>
        );
      }}
    </Fetch>
  );
});
