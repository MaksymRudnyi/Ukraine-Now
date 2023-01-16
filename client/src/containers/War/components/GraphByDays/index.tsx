export {};
// import { QueryData } from '../../../../components';
// // import { GET_WAR_HISTORY } from '../../queries';
// import { GraphByDaysView } from './view';
// import { FC } from 'react';
// import { Grid, GridItem, Center } from '@chakra-ui/react';
//
// type GraphByDaysProps = {
//   type: string;
// };
//
// export const GraphByDays: FC<GraphByDaysProps> = ({ type }) => {
//   if (!type) {
//     return null;
//   }
//
//   return (
//     <Grid mt={4} templateColumns={['repeat(1, 1fr)']}>
//       <QueryData
//         query={GET_WAR_HISTORY}
//         variables={{ type }}
//         styles={{ loader: { h: '400px' } }}
//       >
//         {({ warHistory }) => (
//           <GraphByDaysView history={warHistory} type={type} />
//         )}
//       </QueryData>
//     </Grid>
//   );
// };
