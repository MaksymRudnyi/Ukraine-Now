import UA from './mapData';
import { Box } from '@chakra-ui/react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import { useTranslation } from 'react-i18next';

//https://en.wikipedia.org/wiki/Oblasts_of_Ukraine

const data = UA.objects.default.geometries.map((g, value) => ({
  key: g.properties['hc-key'],
  value,
}));

export const Map = () => {
  const { t } = useTranslation();

  const config = {
    chart: {
      map: UA,
    },

    title: {
      text: null,
    },

    accessibility: {
      series: {
        descriptionFormat:
          '{series.name}, map with {series.points.length} areas.',
        pointDescriptionEnabledThreshold: 50,
      },
    },

    mapNavigation: {
      enabled: true,
      buttonOptions: {
        alignTo: 'spacingBox',
        x: 10,
      },
    },

    colorAxis: {
      min: 0,
      stops: [
        [0, '#EFEFFF'],
        // [0.5, Highcharts.getOptions().colors[0]],
        [0.5, '#f3f3f3'],
        [1, '#f3f3f2'],
      ],
    },

    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'bottom',
    },

    series: [
      {
        data,
        joinBy: ['hc-key', 'key'],
        name: 'Random data',
        states: {
          hover: {
            color: 'lightblue' /*Highcharts.getOptions().colors[2]*/,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            // @ts-ignore
            return t(`map.${this.key}`);
          },
          style: {
            fontWeight: 100,
            fontSize: '10px',
            textOutline: 'none',
          },
        },
        point: {
          events: {
            click: function () {},
          },
        },
      },
      {
        type: 'mapline',
        name: 'Lines',
        accessibility: {
          enabled: false,
        },
        data: Highcharts.geojson(UA, 'mapline'),

        nullColor: '#333333',
        showInLegend: false,
        enableMouseTracking: false,
      },
    ],
  };
  return (
    <Box sx={{ '.highcharts-credits': { display: 'none' } }}>
      <HighchartsReact
        constructorType={'mapChart'}
        highcharts={Highcharts}
        options={config}
      />
    </Box>
  );
};
