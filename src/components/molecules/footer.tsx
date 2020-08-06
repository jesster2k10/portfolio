/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import 'twin.macro';
import React from 'react';
import { FaStackOverflow, FaGithub, FaFile } from 'react-icons/fa';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => (
  <footer tw="flex flex-col" className={className}>
    <ul tw="flex justify-center items-center">
      <li tw="mr-3">
        <FaStackOverflow />
      </li>
      <li tw="mr-3">
        <FaGithub />
      </li>
      <li tw="mr-3">
        <FaFile tw="text-sm" />
      </li>
    </ul>
  </footer>
);

Footer.defaultProps = {
  className: null,
};

export { Footer };
