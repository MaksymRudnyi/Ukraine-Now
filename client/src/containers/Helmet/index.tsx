import { meta } from './meta';
import { Helmet as HelmetAsync } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

export const Helmet = () => {
  const location = useLocation();
  const metaTags = meta();
  const { title, descriptions } =
    metaTags[location.pathname] || metaTags['/404'];

  return (
    <HelmetAsync>
      <meta name="description" content={descriptions} />
      <title>{title}</title>
    </HelmetAsync>
  );
};
