import { CurrencyByDates } from '..';
import { Action, ModalWindow, InternalLink } from '../../../components';
import { GetCurrencyForToday_currencyToday } from './__generated__/GetCurrencyForToday';
import { Box, useDisclosure } from '@chakra-ui/react';
import { FC, useState } from 'react';

const CURRENCY_TO_SHOW = ['USD', 'EUR'];

type CurrencyTodayViewProps = {
  currencyToday: GetCurrencyForToday_currencyToday[];
};

export const CurrencyTodayView: FC<CurrencyTodayViewProps> = ({
  currencyToday,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currency, setCurrency] = useState('');
  const [EUR, USD] = currencyToday
    .filter((item) => CURRENCY_TO_SHOW.includes(item.cc))
    .sort((n1, n2) => {
      if (n1.cc > n2.cc) {
        return 1;
      }

      if (n1.cc < n2.cc) {
        return -1;
      }

      return 0;
    });

  const closeModal = () => {
    onClose();
    setCurrency('');
  };

  return (
    <div>
      <Box mt={2}>
        <Action onClick={() => setCurrency(USD.cc)}>
          <>USD/UAH: {USD.rate}</>
        </Action>
      </Box>
      <Box mt={2}>
        <Action onClick={() => setCurrency(EUR.cc)}>
          <>EUR/UAH: {EUR.rate}</>
        </Action>
      </Box>

      <ModalWindow isOpen={!!currency} onClose={closeModal}>
        <CurrencyByDates valcode={currency} endDate={''} startDate={''} />
      </ModalWindow>
    </div>
  );
};
