import { Loader, ModalWindow } from '../../../components';
import { GetCurrencyByDates_currencyByDates } from './__generated__/GetCurrencyByDates';
import { Box, useDisclosure } from '@chakra-ui/react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import { FC, useState } from 'react';

const CURRENCY_TO_SHOW = ['USD', 'EUR'];

type CurrencyByDatesViewProps = {
  currencyByDates: GetCurrencyByDates_currencyByDates[];
};

export const CurrencyByDatesView: FC<CurrencyByDatesViewProps> = ({
  currencyByDates,
}) => {
  console.log('currencyByDates: ', currencyByDates);
  const config = {
    title: {
      text: 'U.S Solar Employment Growth by Job Category, 2010-2020',
    },

    subtitle: {
      text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
    },

    yAxis: {
      title: {
        text: 'Number of Employees',
      },
    },

    xAxis: {
      accessibility: {
        rangeDescription: 'Range: 2010 to 2020',
      },
      type: 'datetime',
      labels: {
        formatter: function () {
          // @ts-ignore
          // console.log('---', this.value)
          return Highcharts.dateFormat('%a %d %b', this.value);
        },
      },
    },

    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
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
        // @ts-ignore
        return (
          'The value for <b>' +
          Highcharts.dateFormat('%a %d %b', this.x) +
          '</b> is <b>' +
          this.y +
          '</b>'
        );
      },
    },

    series: [
      {
        name: 'Installation & Developers',
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
  return <HighchartsReact highcharts={Highcharts} options={config} />;
};
