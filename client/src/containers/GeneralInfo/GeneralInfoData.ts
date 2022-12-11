import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { FC, ReactElement } from 'react';
import {getAppCheckToken} from "../../utils/firebase";

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
  const { isLoading, error, data,  } = useQuery({
    queryKey: ['general'],
    queryFn: async () => {
      return axios.get(`${process.env.REACT_APP_API_HOST}/general`, {
        headers: {
          'X-Firebase-AppCheck': await getAppCheckToken()
        }
      }).then(({ data }) => data)
    }
  });

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
