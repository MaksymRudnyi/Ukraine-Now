import { FaHome, FaInfoCircle, FaDonate, FaRocket } from 'react-icons/fa';

export const nav = [
  {
    label: 'nav.general',
    pathname: '/',
    content: [
      {
        label: 'nav.home',
        icon: FaHome,
        link: 'home',
        isScroll: true,
      },
      {
        label: 'nav.corruption',
        icon: FaDonate,
        link: 'corruption',
        isScroll: true,
      },
      {
        label: 'nav.war',
        icon: FaRocket,
        link: 'war',
        isScroll: true,
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
        isScroll: true,
      },
    ],
  },
];
