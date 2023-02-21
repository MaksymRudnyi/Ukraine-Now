import { Center, CenterProps, Text } from '@chakra-ui/react';
import { WarningTwoIcon, IconProps } from '@chakra-ui/icons';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type ErrorPros = {
  container?: CenterProps;
  icon?: IconProps;
};
export const Error: FC<ErrorPros> = ({ container, icon }) => {
  const { t } = useTranslation();

  return (
    <Center flexDirection={'column'} {...container}>
      <WarningTwoIcon boxSize={10} color={'red'} {...icon} />
      <Text mt={4} display={'block'}>
        {t('error')}
      </Text>
    </Center>
  );
};
