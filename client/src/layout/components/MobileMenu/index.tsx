import { Box } from '@chakra-ui/react';
import Hamburger from 'hamburger-react';
import { useState } from 'react';

export const MobileMenu = () => {
  const [activeSecondaryMenuMobile, setActiveSecondaryMenuMobile] =
    useState(false);
  const [activeMobile, setActiveMobile] = useState(false);
  return (
    <>
      <Box>
        <Hamburger
          toggled={activeMobile}
          toggle={() => setActiveMobile(!activeMobile)}
        />
      </Box>
      <Box
        onClick={() => setActiveSecondaryMenuMobile(!activeSecondaryMenuMobile)}
      >
        icon
      </Box>
    </>
  );
};
