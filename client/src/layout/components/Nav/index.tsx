import store from '../../../store';
import { nav } from './items';
import { Box, Text, Icon } from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink, scroller } from 'react-scroll';
import { useEffect } from 'react';

const scrollLinkProps = {
  activeStyle: { color: 'white' },
  spy: true,
  smooth: true,
  duration: 500,
  offset: -76,
  hashSpy: true,
};

export const Nav = observer(() => {
  const { isMobileNavigationOpen } = store.UI;
  const { t } = useTranslation();
  const { pathname, hash } = useLocation();

  useEffect(() => {
    scroller.scrollTo(hash.slice(1), scrollLinkProps);
  }, [pathname]);

  return (
    <Box
      padding={4}
      color={'whiteAlpha.600'}
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
            const isTheSamePage = pathname === menu.pathname;
            const LinkComponent = isTheSamePage ? ScrollLink : Link;

            return (
              <LinkComponent
                to={isTheSamePage ? link.link : `${menu.pathname}#${link.link}`}
                key={link.link}
                {...scrollLinkProps}
              >
                <Text
                  h={10}
                  transition={
                    'transform .2s, height 300ms, color 300ms, background-color 300ms, -webkit-transform .2s'
                  }
                  whiteSpace={'nowrap'}
                  position={'relative'}
                  display={'flex'}
                  alignItems={'center'}
                  borderRadius={'4px'}
                  cursor={'pointer'}
                  _hover={{
                    color: 'white',
                    backgroundColor: 'whiteAlpha.100',
                  }}
                >
                  <Icon
                    as={link.icon}
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
              </LinkComponent>
            );
          })}
        </>
      ))}
    </Box>
  );
});
