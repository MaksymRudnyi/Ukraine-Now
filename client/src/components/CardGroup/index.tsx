import { Paper } from '../../components';
import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Box,
  StatGroup,
} from '@chakra-ui/react';
import { FC } from 'react';

type Card = {
  value: string;
  title: string;
  helpText?: string;
};

type CardGroupProps = {
  cards: Card[];
};

export const CardGroup: FC<CardGroupProps> = ({ cards }) => (
  <Paper p={2}>
    <StatGroup>
      {cards.map(({ title, value, helpText }) => (
        <Stat key={value}>
          <StatLabel>{title}</StatLabel>
          <StatNumber>{value}</StatNumber>
          <StatHelpText>{helpText}</StatHelpText>
        </Stat>
      ))}
    </StatGroup>
  </Paper>
);
