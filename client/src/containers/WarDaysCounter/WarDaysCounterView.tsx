import { CardGroup } from '../../components/CardGroup';
import { useTranslation } from 'react-i18next';

export const WarDaysCounterView = () => {
  const { t } = useTranslation();

  const today = new Date();
  const dateOfBeginFullScaleInvasion = new Date('2022-02-24');
  const dateOfCrimeaOccupation = new Date('2014-03-18');
  const daysFromFullScale =
    today.getTime() - dateOfBeginFullScaleInvasion.getTime();
  const daysFromCrimea = today.getTime() - dateOfCrimeaOccupation.getTime();

  const cards = [
    {
      value: `${Math.floor(daysFromFullScale / (1000 * 3600 * 24))}`,
      title: t('general.days_of_war'),
      helpText: t('general.from_full_scale_invasion'),
    },
    {
      value: `${Math.floor(daysFromCrimea / (1000 * 3600 * 24))}`,
      title: t('general.days_of_war'),
      helpText: t('general.from_crimea_occupation'),
    },
  ];

  return <CardGroup cards={cards} />;
};
