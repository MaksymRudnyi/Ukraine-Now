import { Card, ModalWindow } from '../../components';
import { useDisclosure, Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const OccupiedView = ({ occupied }) => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen} cursor={'pointer'}>
        <Card
          value={`${occupied.value}%`}
          title={t('general.occupied_territory')}
        />
      </Box>

      <ModalWindow isOpen={isOpen} onClose={onClose}>
        <Box h={'70vh'}>
          <iframe
            width={'100%'}
            height={'100%'}
            src={occupied.remoteIframeURL}
            onLoad={() => alert('loaded')}
          />
        </Box>
      </ModalWindow>
    </>
  );
};
