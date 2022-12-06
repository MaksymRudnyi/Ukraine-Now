import { Link, LinkProps } from '@chakra-ui/react';
import { FC } from 'react';

export const InternalLink: FC<LinkProps> = ({
  href = '#',
  children,
  ...rest
}) => (
  <Link href={href} {...rest} color="teal.500">
    {children}
  </Link>
);
