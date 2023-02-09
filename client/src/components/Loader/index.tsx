import { Center, Spinner, CenterProps, SpinnerProps } from '@chakra-ui/react';
import { FC } from 'react';

type LoaderProps = {
  spinner?: SpinnerProps;
  container?: CenterProps;
};

export const Loader: FC<LoaderProps> = ({ spinner, container }) => (
  <Center {...container}>
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.300"
      size="lg"
      {...spinner}
    />
  </Center>
);
