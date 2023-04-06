import { Paper } from '../Paper';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type CardProps = {
  value: ReactElement | string | number | null;
  title: ReactElement | string | number | null;
  helpText?: string | null;
};

export const Card: FC<CardProps> = ({ value, helpText, title }) => (
  <Paper p={2} height={'100%'}>
    <Stat>
      <StatLabel>{title}</StatLabel>
      <StatNumber>{value}</StatNumber>
      { helpText ? <StatHelpText data-testid="helpText">{helpText}</StatHelpText> : null}
    </Stat>
  </Paper>
);
