import { FaHome, FaInfoCircle, FaDonate } from 'react-icons/fa';

export const nav = [
  {
    label: 'nav.general',
    content: [
      {
        label: 'nav.home',
        icon: FaHome,
        link: '/',
      },
      {
        label: 'nav.corruption',
        icon: FaDonate,
        link: '/#corruption',
      },
    ],
  },
  {
    label: 'nav.about',
    content: [
      {
        label: 'nav.about',
        icon: FaInfoCircle,
        link: 'about',
      },
    ],
  },
];
