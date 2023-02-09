import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export const Fetch = ({ country, indicator, children }) => {
  const { isLoading, isError, data } = useQuery(indicator + country, () =>
    axios(
      `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json${
        country === 'all' ? '&mrnev=1&per_page=1000' : ''
      }`
    ).then((res) => res.data)
  );

  const byYears = useMemo(() => {
    if (!data) {
      return [];
    }

    return data[1].filter((item) => item.value);
  }, [data]);

  const props = {
    isLoading,
    isError,
    data: byYears,
  };

  if (typeof children === 'function') {
    return children(props);
  }

  return React.cloneElement(children, props);
};
