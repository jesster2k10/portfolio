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
    <header tw="flex flex-row mb-4" className={className}>
      <nav>
        <ul tw="flex flex-row">
          {headerLinks.map((link) => (
            <HeaderLink key={link.href} title={link.title} href={link.href} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

Header.defaultProps = {
  className: null,
};

export { Header };
