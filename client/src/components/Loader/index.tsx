import { Center, CenterProps } from '@chakra-ui/react';
import { FC } from 'react';

export const Loader: FC<CenterProps> = ({ ...props }) => (
  <Center {...props}>Loading...</Center>
);
