import {Box} from "@chakra-ui/react";
import { FC } from 'react';
import {GetCurrencyForToday_currencyToday} from './__generated__/GetCurrencyForToday';

const CURRENCY_TO_SHOW = ['USD', 'EUR'];

type CurrencyTodayViewProps = {
  currencyToday: GetCurrencyForToday_currencyToday[]
}

export const CurrencyTodayView:FC<CurrencyTodayViewProps> = ({ currencyToday}) => {
  const [EUR, USD] = currencyToday.filter((item) => CURRENCY_TO_SHOW.includes(item.cc)).sort((n1, n2) => {
    if (n1.cc > n2.cc) {
      return 1;
    }

    if (n1.cc < n2.cc) {
      return -1;
    }

    return 0;
  })

  return (
    <div>
      <Box>
        USD/UAH: {USD.rate}
      </Box>
      <Box>
        EUR/UAH: {EUR.rate}
      </Box>
    </div>
  )
}