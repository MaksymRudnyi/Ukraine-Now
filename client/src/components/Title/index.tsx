import { Heading } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type TitleProps = {
  children: ReactElement | string | null;
  id?: string;
};

export const Title: FC<TitleProps> = ({ children, id }) => (
  <Heading as="h3" size="lg" mb={4} id={id}>
    {children}
  </Heading>
);
