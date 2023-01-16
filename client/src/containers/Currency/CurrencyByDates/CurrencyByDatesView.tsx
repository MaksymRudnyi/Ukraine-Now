import { LOCALS } from '../../../constants';
import store from '../../../store';
import { Box } from '@chakra-ui/react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { ICurrency } from '../interfaces';

type CurrencyByDatesViewProps = {
  currencyByDates: ICurrency[];
};

export const CurrencyByDatesView: FC<CurrencyByDatesViewProps> = observer(
  ({ currencyByDates }) => {
    const { locale } = store.UI;
    const { t } = useTranslation();
    const { txt, enname } = currencyByDates[0];
    const currencyName = locale === LOCALS.UK ? txt : enname;

    const config = {
      title: {
        text: t('currency.official_course', { currency: currencyName }),
      },

      subtitle: {
        text: t('currency.source'),
      },

      yAxis: {
        title: {
          text: t('currency.uah'),
        },
      },

      xAxis: {
        type: 'datetime',
        labels: {
          formatter: function () {
            // @ts-ignore
            return Highcharts.dateFormat('%a %d %b', this.value);
          },
        },
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
        },
      },

      tooltip: {
        formatter: function () {
          return (
            '<b>' +
            // @ts-ignore
            Highcharts.dateFormat('%a %d %b', this.x) +
            '</b> - <b>' +
            // @ts-ignore
            this.y +
            '</b>'
          );
        },
      },

      series: [
        {
          name: t('currency.x_axios_name', { currency: currencyName }),
          data: currencyByDates.map((item) => {
            const [day, month, year] = item.exchangedate.split('.');
            return { y: item.rate, x: new Date(`${year}-${month}-${day}`) };
          }),
        },
      ],

      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
              },
            },
          },
        ],
      },
    };
    return (
      <Box sx={{ '.highcharts-credits': { display: 'none' } }}>
        <HighchartsReact highcharts={Highcharts} options={config} />
      </Box>
    );
  }
);
