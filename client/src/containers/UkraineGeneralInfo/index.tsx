import { BorderBox } from '../../components';
import { CurrencyToday} from "..";
import { TableContainer, Table, Tr, Td, Tbody } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const UkraineGeneralInfo = () => {
  const { t } = useTranslation();

  return (
    <BorderBox>
      <TableContainer>
        <Table size="sm">
          <Tbody>
            <Tr>
              <Td>{t('ukraine_general_info.capital')}</Td>
              <Td>{t('ukraine_general_info.capital_value')}</Td>
            </Tr>
            <Tr>
              <Td>{t('ukraine_general_info.official_language')}</Td>
              <Td>{t('ukraine_general_info.official_language_value')}</Td>
            </Tr>
            <Tr>
              <Td>{t('ukraine_general_info.government')}</Td>
              <Td>{t('ukraine_general_info.government_value')}</Td>
            </Tr>
            <Tr>
              <Td>{t('ukraine_general_info.area')}</Td>
              <Td>{t('ukraine_general_info.area_value')}</Td>
            </Tr>
            <Tr>
              <Td>{t('ukraine_general_info.population')}</Td>
              <Td>{t('ukraine_general_info.population_value')}</Td>
            </Tr>
            <Tr>
              <Td>{t('ukraine_general_info.currency')}</Td>
              <Td>
                {t('ukraine_general_info.currency_value')}
                <CurrencyToday/>
              </Td>
            </Tr>
            <Tr>
              <Td>{t('ukraine_general_info.independence')}</Td>
              <Td>{t('ukraine_general_info.independence_value')}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </BorderBox>
  );
};
