import { FC, useRef, useEffect, useState, useMemo } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highmaps';
import { Paper } from '../../../../components';
import { useTranslation } from 'react-i18next';
import { Box, Button, Text } from '@chakra-ui/react';

type GraphByDaysViewProps = {
  history;
  type: string;
};

type Series = {
  x: Date;
  y: number;
};

enum Display {
  BY_DAYS,
  BY_MONTHS,
  STATS,
}

export const GraphByDaysView: FC<GraphByDaysViewProps> = ({
  type,
  history,
}) => {
  const { t } = useTranslation();
  const chartContainer = useRef<HTMLDivElement>(null);
  const [currentDisplay, setCurrentDisplay] = useState<Display>(
    Display.BY_DAYS
  );

  useEffect(() => {
    if (chartContainer.current) {
      chartContainer.current.scrollIntoView();
    }
  }, []);

  const changeDisplay = (display: Display) => {
    setCurrentDisplay(display);
  };

  const buildSeriesByDays = (): Series[] => {
    return history.map((item) => ({
      y: currentDisplay === Display.STATS ? item.value : item.increase,
      x: new Date(item.date),
    }));
  };

  const buildSeriesByMonth = (): Series[] => {
    const groupByMonth = history.reduce((acc, element) => {
      const month = element.date.slice(0, 7);
      acc[month] = (acc[month] ? acc[month] : 0) + element.increase;

      return acc;
    }, {});

    const series: Series[] = [];

    for (const [key, value] of Object.entries(groupByMonth)) {
      series.push({
        // @ts-ignore
        y: value,
        x: new Date(`${key}-01`),
      });
    }

    return series;
  };

  const displaySeries = useMemo(() => {
    return currentDisplay !== Display.BY_MONTHS
      ? buildSeriesByDays()
      : buildSeriesByMonth();
  }, [currentDisplay, type]);

  const getGraphTitle = () => {
    switch (currentDisplay) {
      case Display.BY_DAYS:
        return t('war.graph.by_days');
      case Display.BY_MONTHS:
        return t('war.graph.by_months');
      default:
        return t('war.graph.statistics');
    }
  };

  if (!history.length) {
    return null;
  }

  const series = [
    {
      name: getGraphTitle(),
      data: displaySeries,
    },
  ];

  const config = {
    title: {
      text: t(`war.${type}`),
    },

    subtitle: {
      text: '',
      style: {
        display: 'none',
      },
    },

    xAxis: {
      type: 'datetime',
    },

    yAxis: {
      title: {
        text: t('war.graph.items'),
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
        return (
          '<b>' +
          Highcharts.dateFormat(
            currentDisplay === Display.BY_MONTHS ? '%B %Y' : '%A %d %B',
            // @ts-ignore
            this.x
          ) +
          '</b> - <b>' +
          // @ts-ignore
          this.y +
          '</b>'
        );
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
    <Box ref={chartContainer} overflow={'hidden'}>
      <Box mb={4}>
        <Text as={'span'} display={['block', 'inline']} mb={[1, 0]} mr={1}>
          {t('war.graph.display')}
        </Text>
        <Button
          colorScheme={currentDisplay === Display.BY_DAYS ? 'blue' : 'gray'}
          mr={1}
          onClick={() => changeDisplay(Display.BY_DAYS)}
        >
          {t('war.graph.by_days')}
        </Button>
        <Button
          colorScheme={currentDisplay === Display.BY_MONTHS ? 'blue' : 'gray'}
          mr={1}
          onClick={() => changeDisplay(Display.BY_MONTHS)}
        >
          {t('war.graph.by_months')}
        </Button>
        <Button
          colorScheme={currentDisplay === Display.STATS ? 'blue' : 'gray'}
          onClick={() => changeDisplay(Display.STATS)}
        >
          {t('war.graph.statistics')}
        </Button>
      </Box>
      <Paper sx={{ '.highcharts-credits': { display: 'none' } }}>
        <HighchartsReact highcharts={Highcharts} options={config} />
      </Paper>
    </Box>
  );
};
