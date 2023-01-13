import React, { useCallback, FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';
import { eq } from 'lodash';
import { Loader, ResponseError } from '..';
import { CenterProps } from '@chakra-ui/react';

export const QueryDataErrorBoundary = ({
  loading,
  error,
  refetch,
  skipLoading = false,
  skipError = false,
  children,
  data,
  propsResolver,
  styles,
}) => {
  if (!children) {
    return 'Error! You forgot to pass children'; // Probably better to throw
  }
  if (!skipLoading && loading) {
    return <Loader {...styles.loader} />;
  }
  if (!skipError && error) {
    return <ResponseError /*error={error} retry={refetch}*/ />;
  }
  const childProps = propsResolver ? propsResolver(data) : data;
  if (typeof children === 'function') {
    return children(childProps);
  }
  return React.cloneElement(children, childProps);
};

QueryDataErrorBoundary.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.shape({}),
  refetch: PropTypes.func,
  propsResolver: PropTypes.func,
  data: PropTypes.object,
  skipLoading: PropTypes.bool,
  skipError: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
};

type RawQueryDataProps = {
  query: any;
  variables?: Object;
  children: ReactElement | Function;
  skipError?: boolean;
  skipLoading?: boolean;
  retry?: boolean;
  styles?: {
    loader: CenterProps;
  };
};

export const RawQueryData: FC<RawQueryDataProps> = ({
  query,
  variables,
  children,
  skipError,
  skipLoading,
  styles,
  retry,
}) => {
  const { loading, error, data, refetch } = useQuery(query, { variables });

  const retryRequest = useCallback(
    () => refetch(variables),
    [variables, refetch]
  );

  if (!skipLoading && loading) {
    return <Loader {...styles?.loader} />;
  }
  if (!skipError && error) {
    return (
      <ResponseError /*error={error} retry={retry ? retryRequest : undefined}*/
      />
    );
  }

  if (!children) {
    return 'Error! You forgot to pass children';
  }

  if (typeof children === 'function') {
    return children(data);
  }

  return React.cloneElement(children, data);
};

export const areEqual = (prevProps, nextProps) =>
  Object.keys(prevProps).every((propName) => {
    const prevProp = prevProps[propName];
    const nextProp = nextProps[propName];
    if (propName === 'variables') {
      return areEqual(prevProp, nextProp);
    }
    return eq(prevProp, nextProp);
  });

export const QueryData = React.memo(RawQueryData, areEqual);

// RawQueryData.propTypes = {
//   query: PropTypes.object.isRequired,
//   variables: PropTypes.object,
//   children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
//   skipError: PropTypes.bool,
//   skipLoading: PropTypes.bool,
//   retry: PropTypes.bool
// };
