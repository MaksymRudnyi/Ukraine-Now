import store from '../../../store';
import { nav } from './items';
import { Box, Text } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Nav = observer(() => {
  const { isMobileNavigationOpen } = store.UI;
  const { t } = useTranslation();

  return (
    <Box
      padding={4}
      w={[
        '280px',
        '280px',
        '280px',
        '80px',
        isMobileNavigationOpen ? '80px' : '280px',
      ]}
      _groupHover={{ width: '280px' }}
    >
      {nav.map((menu) => (
        <>
          <Text
            position={'relative'}
            color={'whiteAlpha.600'}
            sx={{
              textIndent: [
                0,
                0,
                0,
                '-999px',
                isMobileNavigationOpen ? '-999px' : 0,
              ],
              _groupHover: { textIndent: 0, _before: { display: 'none' } },
            }}
            _before={{
              content: "''",
              display: [
                'none',
                'none',
                'none',
                'block',
                isMobileNavigationOpen ? 'block' : 'none',
              ],
              position: 'absolute',
              top: '50%',
              left: 0,
              height: '1px',
              width: '100%',
              backgroundColor: 'whiteAlpha.100',
            }}
          >
            {t(menu.label)}
          </Text>
          {menu.content.map((link) => {
            const Icon = link.icon;

            return (
              <Link to={link.link} key={link.link}>
                <Text
                  h={10}
                  transition={
                    'transform .2s, height 300ms, color 300ms, background-color 300ms, -webkit-transform .2s'
                  }
                  color={'whiteAlpha.600'}
                  whiteSpace={'nowrap'}
                  position={'relative'}
                  display={'flex'}
                  alignItems={'center'}
                  borderRadius={'4px'}
                  _hover={{
                    color: 'white',
                    backgroundColor: 'whiteAlpha.100',
                  }}
                >
                  <Icon
                    mr={[
                      '10px',
                      '10px',
                      '10px',
                      '30px',
                      isMobileNavigationOpen ? '30px' : '10px',
                    ]}
                    ml={[
                      '10px',
                      '10px',
                      '10px',
                      '18px',
                      isMobileNavigationOpen ? '18px' : '10px',
                    ]}
                    transition={'all .2s'}
                    _groupHover={{ mx: '10px' }}
                  />
                  {t(link.label)}
                </Text>
              </Link>
            );
          })}
        </>
      ))}
    </Box>
  );
});
