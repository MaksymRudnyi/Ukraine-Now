import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useNumThousands = (val: number) => {
  const { t } = useTranslation();
  let changedNum = "";

    
    if (Math.abs(Number(val)) >= 1.0e+9) {
        changedNum =  t('numbers_thousandth.billion', { number: (Math.abs(Number(val)) / 1.0e+9).toFixed(1)});
    }

    else if (Math.abs(Number(val)) >= 1.0e+6) {
        changedNum = t('numbers_thousandth.million', { number: (Math.abs(Number(val)) / 1.0e+6).toFixed(1)});
    }

    else if (Math.abs(Number(val)) >= 1.0e+3) { 
        changedNum = t('numbers_thousandth.thousand', { number: (Math.abs(Number(val)) / 1.0e+9).toFixed(1)});
    }

    else {
        changedNum = Math.abs(Number(val)).toString(); 
        } 
  return changedNum;
};


