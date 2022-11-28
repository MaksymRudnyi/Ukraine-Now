import { Card, ModalWindow, Loader } from '../../components';
import { useDisclosure, Box } from '@chakra-ui/react';
import { useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export const OccupiedView = ({ occupied }) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);

  const closeWindow = useCallback(() => {
    setIsLoading(true);
    onClose();
  }, [onClose, setIsLoading]);

  return (
    <>
      <Box onClick={onOpen} cursor={'pointer'}>
        <Card
          value={`${occupied.value}%`}
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
              src={occupied.remoteIframeURL}
              onLoad={() => {
                setIsLoading(false);
              }}
            />
          </Box>
        </Box>
      </ModalWindow>
    </>
  );
};
