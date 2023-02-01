import {
  FaHome,
  FaInfoCircle,
  FaDonate,
  FaRocket,
  FaDollarSign,
} from 'react-icons/fa';

export const nav = [
  {
    label: 'nav.general',
    pathname: '/',
    content: [
      {
        label: 'nav.home',
        icon: FaHome,
        link: 'home',
      },
      {
        label: 'nav.corruption',
        icon: FaDonate,
        link: 'corruption',
      },
      {
        label: 'nav.war',
        icon: FaRocket,
        link: 'war',
      },
      {
        label: 'nav.economy',
        icon: FaDollarSign,
        link: 'economy',
      },
    ],
  },
  {
    label: 'nav.about',
    pathname: '/about',
    content: [
      {
        label: 'nav.about',
        icon: FaInfoCircle,
        link: 'about',
      },
    ],
  },
];
