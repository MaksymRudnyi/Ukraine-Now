import { Box } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import store from '../../../store';

export const Language = observer(() => {
  const { locale, setLocale } = store.UI;
  return (
    <Box>
      {locale}
      <button onClick={() => setLocale('en')}>en</button>
      <button onClick={() => setLocale('uk-UA')}>uk-UA</button>
    </Box>
  );
});
