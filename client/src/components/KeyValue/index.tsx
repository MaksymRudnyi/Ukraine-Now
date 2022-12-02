import { Box, Text } from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type KeyValueProps = {
  value: string | ReactElement;
  label?: string;
};
export const KeyValue: FC<KeyValueProps> = ({ value, label }) => (
  <Box>
    {label ? (
      <Text
        width={'40%'}
        display={'inline-block'}
        color={'blackAlpha.600'}
        as={'span'}
      >
        {label}:&nbsp;
      </Text>
    ) : null}
    <Text as={'span'}>{value}</Text>
  </Box>
);
