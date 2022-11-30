import {
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Box,
  StatGroup,
  StatArrow,
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
  <Box border={'1px solid'} borderColor={'gray.200'} borderRadius={10} p={2}>
    <StatGroup>
      {cards.map(({ title, value, helpText }) => (
        <Stat key={value}>
          <StatLabel>{title}</StatLabel>
          <StatNumber>{value}</StatNumber>
          <StatHelpText>{helpText}</StatHelpText>
        </Stat>
      ))}
    </StatGroup>
  </Box>
);
