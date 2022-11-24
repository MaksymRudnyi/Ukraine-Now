import UkraineFlag from '../../../assets/i/flags/ukraine.svg';
import UnitedKingdomFlag from '../../../assets/i/flags/united-kingdom.svg';
import { LOCALS } from '../../../constants';
import store from '../../../store';
import { Box, Button, Image } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { FC } from 'react';

export enum LanguagePosition {
  HEADER,
  SIDEBAR,
}

type LanguageProps = {
  position?: LanguagePosition;
};

export const Language: FC<LanguageProps> = observer(
  ({ position = LanguagePosition.HEADER }) => {
    const { locale, setLocale } = store.UI;

    return (
      <Box alignContent={'end'} display={'flex'}>
        <Button
          disabled={locale === LOCALS.EN}
          p={1}
          ml={1}
          variant="ghost"
          onClick={() => setLocale(LOCALS.EN)}
        >
          <Image w={10} src={UnitedKingdomFlag} alt={'English language'} />
        </Button>

        <Button
          disabled={locale === LOCALS.UK}
          p={1}
          ml={position === LanguagePosition.SIDEBAR ? 5 : 0}
          variant="ghost"
          onClick={() => setLocale(LOCALS.UK)}
        >
          <Image w={10} src={UkraineFlag} alt={'Ukrainian language'} />
        </Button>
      </Box>
    );
  }
);
