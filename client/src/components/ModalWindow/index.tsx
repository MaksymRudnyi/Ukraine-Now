import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';
import { FC, ReactElement } from 'react';

type ModalWindowProps = {
  isOpen: boolean;
  onClose: () => void;
  body?: ReactElement | string;
  title?: ReactElement | string;
  children?: ReactElement | string;
  onSecondButtonClick?: () => void;
  secondButtonTitle?: string;
};

export const ModalWindow: FC<ModalWindowProps> = ({
  isOpen,
  onClose,
  body,
  children,
  title,
  onSecondButtonClick,
  secondButtonTitle,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={'6xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body || children}</ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          {onSecondButtonClick ? (
            <Button variant="ghost">{secondButtonTitle}</Button>
          ) : null}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
