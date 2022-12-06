import {GET_CURRENCY_FOR_TODAY} from "./queries";
import { QueryData } from '../../../components';
import { CurrencyTodayView} from "./CurrencyTodayView";

export const CurrencyToday = () => {
  return (
    <QueryData query={GET_CURRENCY_FOR_TODAY}>
      {({currencyToday}) => <CurrencyTodayView currencyToday={currencyToday}/> }
    </QueryData>
  )
}