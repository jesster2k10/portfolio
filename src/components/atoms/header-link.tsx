/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import 'twin.macro';
import React from 'react';
import { Link } from 'gatsby';

interface HeaderLinkProps {
  className?: string;
  title: string;
  href: string;
}

const HeaderLink = ({ className, title, href }: HeaderLinkProps) => (
  <li tw="mr-4 text-xs font-mono" className={className}>
    <Link to={href} activeClassName="active-link">
      {title}
    </Link>
  </li>
);

HeaderLink.defaultProps = {
  className: null,
};

export { HeaderLink };
