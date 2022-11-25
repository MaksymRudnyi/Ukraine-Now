import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { FC } from 'react';

type CardProps = {};

export const Card: FC<CardProps> = () => (
  <Stat border={'1px solid'} borderColor={'gray.200'} borderRadius={10} p={2}>
    <StatLabel>Collected Fees</StatLabel>
    <StatNumber>£0.00</StatNumber>
    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
  </Stat>
);
