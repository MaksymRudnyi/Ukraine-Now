import React, { useMemo } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { WORLD_BANK_INDICATOR } from '../../constants';

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

    let clearData = data[1].filter((item) => item.value);
    if (indicator === WORLD_BANK_INDICATOR.INFLATION) {
      clearData = clearData.filter((item) => item.date > 1995);
    }

    return clearData;
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
