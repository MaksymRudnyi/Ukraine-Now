import { Text, TextProps } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type ActionProps =
  | {
      children: ReactElement | string | null;
    }
  | TextProps;

export const Action: FC<ActionProps> = ({ children, ...rest }) => (
  <Text
    as="span"
    cursor={'pointer'}
    sx={{
      textDecoration: 'underline dashed #80868b',
      textUnderlineOffset: '1px',
      textUnderlinePosition: 'under',
    }}
    {...rest}
  >
    {children}
  </Text>
);
