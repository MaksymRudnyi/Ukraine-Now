import React, { useMemo } from 'react';
import { useQuery } from 'react-query';

export const Fetch = ({ country, indicator, children }) => {
  const { isLoading, error, data } = useQuery(indicator + country, () =>
    fetch(
      `https://api.worldbank.org/v2/country/${country}/indicator/${indicator}?format=json${
        country === 'all' ? '&mrnev=1&per_page=1000' : ''
      }`
    ).then((res) => res.json())
  );

  const byYears = useMemo(() => {
    if (!data) {
      return [];
    }

    return data[1].filter((item) => item.value);
  }, [data]);

  const props = {
    isLoading,
    error,
    data: byYears,
  };

  if (typeof children === 'function') {
    return children(props);
  }

  return React.cloneElement(children, props);
};
