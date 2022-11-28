import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { FC } from 'react';

type CardProps = {
  value: string;
  title: string;
  helpText?: string;
};

export const Card: FC<CardProps> = ({ value, helpText, title }) => (
  <Stat border={'1px solid'} borderColor={'gray.200'} borderRadius={10} p={2}>
    <StatLabel>{title}</StatLabel>
    <StatNumber>{value}</StatNumber>
    <StatHelpText>{helpText}</StatHelpText>
  </Stat>
);
