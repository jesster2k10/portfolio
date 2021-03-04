/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import 'twin.macro';
import React from 'react';
import { useSite } from '@/hooks/use-site';
import { HeaderLink } from '../atoms/header-link';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const { headerLinks } = useSite();
  return (
    <header
      tw="flex flex-wrap justify-center w-full flex-row mb-4"
      className={className}
    >
      <ul tw="flex flex-wrap justify-center w-full flex-row flex-row">
        {headerLinks.map((link) => (
          <HeaderLink key={link.href} title={link.title} href={link.href} />
        ))}
      </ul>
    </header>
  );
};

Header.defaultProps = {
  className: null,
};

export { Header };
