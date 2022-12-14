import { Card, ModalWindow, Loader, Action } from '../../../../components';
import { useDisclosure, Box } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { observer } from 'mobx-react-lite';
import store from '../../../../store';
import { LOCALS } from '../../../../constants';

export const OccupiedView = observer(() => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const { locale } = store.UI;

  const closeWindow = useCallback(() => {
    setIsLoading(true);
    onClose();
  }, [onClose, setIsLoading]);

  return (
    <>
      <Box onClick={onOpen} cursor={'pointer'} height={'100%'}>
        <Card
          value={
            <Action>
              <>15%</>
            </Action>
          }
          title={t('general.occupied_territory')}
        />
      </Box>

      <ModalWindow isOpen={isOpen} onClose={closeWindow}>
        <Box>
          {isLoading ? <Loader /> : null}
          <Box opacity={isLoading ? 0 : 1} h={'70vh'}>
            <iframe
              width={'100%'}
              height={'100%'}
              src={`https://deepstatemap.live/${
                locale === LOCALS.EN ? 'en' : ''
              }`}
              onLoad={() => {
                setIsLoading(false);
              }}
            />
          </Box>
        </Box>
      </ModalWindow>
    </>
  );
});
