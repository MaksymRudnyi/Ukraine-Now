import Highcharts from 'highcharts/highmaps';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useHighchartsTranslations = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Highcharts.setOptions({
      lang: {
        loading: t('charts.loading')!,
        months: t('charts.months').split('.'),
        weekdays: t('charts.weekdays').split('.'),
        shortMonths: t('charts.short_months').split('.'),
        rangeSelectorFrom: t('charts.range_selector_from')!,
        rangeSelectorTo: t('charts.range_selector_to')!,
        rangeSelectorZoom: t('charts.range_selector_zoom')!,
        downloadPNG: t('charts.downloadPNG')!,
        downloadJPEG: t('charts.downloadJPEG')!,
        downloadPDF: t('charts.downloadPDF')!,
        downloadSVG: t('charts.downloadSVG')!,
      },
    });
  }, []);
};
