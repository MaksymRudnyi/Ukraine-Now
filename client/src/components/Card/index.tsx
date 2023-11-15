import { Paper } from '../Paper';
import { Stat, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type CardProps = {
  value: ReactElement | string | number | null;
  title: ReactElement | string | number | null;
  helpText?: string | null;
  isActive?: boolean;
};

export const Card: FC<CardProps> = ({ value, helpText, title, isActive = false }) => (
  <Paper p={2} height={'100%'}  _hover={{borderColor: "gray.400"}} borderColor={ isActive ? "gray.800": "gray.200" } _active={{borderColor: "gray.800"}}>
    <Stat>
      <StatLabel>{title}</StatLabel>
      <StatNumber>{value}</StatNumber>
      { helpText ? <StatHelpText data-testid="helpText">{helpText}</StatHelpText> : null}
    </Stat>
  </Paper>
);
