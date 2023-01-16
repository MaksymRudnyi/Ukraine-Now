export {};
// import { GetWarHistory_warHistory } from '../../__generated__/GetWarHistory';
// import { FC, useRef, useEffect } from 'react';
// import HighchartsReact from 'highcharts-react-official';
// import Highcharts from 'highcharts/highmaps';
// import { Paper } from '../../../../components';
// import { useTranslation } from 'react-i18next';
// import { Box } from '@chakra-ui/react';
//
// type GraphByDaysViewProps = {
//   history: [GetWarHistory_warHistory];
//   type: string;
// };
//
// export const GraphByDaysView: FC<GraphByDaysViewProps> = ({
//   type,
//   history,
// }) => {
//   const { t } = useTranslation();
//   const chartContainer = useRef<HTMLDivElement>(null);
//
//   useEffect(() => {
//     if (chartContainer.current) {
//       chartContainer.current.scrollIntoView();
//     }
//   }, []);
//
//   const series = [
//     {
//       name: t('war.graph.by_days'),
//       data: history.map((item) => ({
//         y: item.increase,
//         x: new Date(item.date),
//       })),
//     },
//   ];
//
//   const config = {
//     title: {
//       text: t(`war.${type}`),
//     },
//
//     subtitle: {
//       text: '',
//       style: {
//         display: 'none',
//       },
//     },
//
//     xAxis: {
//       type: 'datetime',
//     },
//
//     yAxis: {
//       title: {
//         text: 'yAxis title',
//       },
//     },
//
//     plotOptions: {
//       series: {
//         label: {
//           connectorAllowed: false,
//         },
//         pointStart: series[0].data[series[0].data.length - 1].x,
//       },
//     },
//
//     tooltip: {
//       formatter: function () {
//         return (
//           '<b>' +
//           // @ts-ignore
//           Highcharts.dateFormat('%a %d %b', this.x) +
//           '</b> - <b>' +
//           // @ts-ignore
//           this.y +
//           '</b>'
//         );
//       },
//     },
//
//     series: series,
//
//     responsive: {
//       rules: [
//         {
//           condition: {
//             maxWidth: 500,
//           },
//           chartOptions: {
//             legend: {
//               layout: 'horizontal',
//               align: 'center',
//               verticalAlign: 'bottom',
//             },
//           },
//         },
//       ],
//     },
//   };
//
//   return (
//     <Box ref={chartContainer} overflow={'hidden'}>
//       <Paper sx={{ '.highcharts-credits': { display: 'none' } }}>
//         <HighchartsReact highcharts={Highcharts} options={config} />
//       </Paper>
//     </Box>
//   );
// };
