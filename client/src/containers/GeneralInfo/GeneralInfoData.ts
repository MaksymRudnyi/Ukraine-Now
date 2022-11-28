import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { FC, ReactElement } from 'react';

type GeneralInfoDataProps = {
  skipLoading?: boolean;
  skipError?: boolean;
  children: ReactElement | Function;
};

export const GeneralInfoData: FC<GeneralInfoDataProps> = ({
  children,
  skipLoading,
  skipError,
}) => {
  const { isLoading, error, data } = useQuery({
    queryKey: ['general'],
    queryFn: () =>
      axios.get('http://localhost:4000/general').then(({ data }) => data),
  });

  console.log('---0', data);

  if (isLoading) {
    return 'loading';
  }
  if (error) {
    return 'error';
  }

  if (typeof children === 'function') {
    return children(data);
  }

  return React.cloneElement(children, data);
};
