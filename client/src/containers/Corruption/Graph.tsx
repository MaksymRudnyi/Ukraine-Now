import { Paper } from '../../components';
import store from '../../store';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type SeriesType = {
  name: string;
  data: {
    x: number;
    y: number;
  }[];
};

type CurruptionGraphProps = {
  title?: string | null;
  yAxis?: string | null;
  series: SeriesType[];
};

export const CorruptionGraph: FC<CurruptionGraphProps> = observer(
  ({ title, yAxis, series }) => {
    const { locale } = store.UI;
    const { t } = useTranslation();

    const config = {
      title: {
        text: title,
      },

      subtitle: {
        text: '',
        style: {
          display: 'none',
        },
      },

      yAxis: {
        title: {
          text: yAxis,
        },
      },

      plotOptions: {
        series: {
          label: {
            connectorAllowed: false,
          },
          pointStart: series[0].data[series[0].data.length - 1].x,
        },
      },

      tooltip: {
        formatter: function () {
          // @ts-ignore
          return `${this.x}: <b>${this.y}</b>`;
        },
      },

      series: series,

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
      <Paper sx={{ '.highcharts-credits': { display: 'none' } }}>
        <HighchartsReact highcharts={Highcharts} options={config} />
      </Paper>
    );
  }
);
