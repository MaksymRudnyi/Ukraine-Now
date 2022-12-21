import { QueryData, Title } from '../../components';
import { CorruptionView } from './CorruptionView';
import { GET_CORRUPTION } from './queries';
import { useTranslation } from 'react-i18next';

export const Corruption = () => {
  const { t } = useTranslation();

  return (
    <>
      <Title>{t('corruption.corruption_perceptions_index')}</Title>
      <QueryData query={GET_CORRUPTION}>
        {({ corruption }) => <CorruptionView corruption={corruption} />}
      </QueryData>
    </>
  );
};
