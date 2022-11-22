import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const Home: FC = () => {
  const { t } = useTranslation();

  return (
    <Box
      backgroundColor={['red', 'blue', 'green', 'yellow', 'pink']}
      className="App"
    >
      Home page
      {process.env.REACT_APP_API_HOST}
      <hr />
      {t('title')}
    </Box>
  );
};
