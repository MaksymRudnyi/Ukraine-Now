import { GetCurrencyByDates_currencyByDates } from './__generated__/GetCurrencyByDates';
import { Box } from '@chakra-ui/react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type CurrencyByDatesViewProps = {
  currencyByDates: GetCurrencyByDates_currencyByDates[];
};

export const CurrencyByDatesView: FC<CurrencyByDatesViewProps> = ({
  currencyByDates,
}) => {
  const { t } = useTranslation();
  const { txt } = currencyByDates[0];

  const config = {
    title: {
      text: t('currency.official_course', { currency: txt }),
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
        name: t('currency.x_axios_name', { currency: txt }),
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
};
