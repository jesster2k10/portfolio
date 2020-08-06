/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import 'twin.macro';
import React from 'react';

interface CommandProps {
  className?: string;
  title: string;
  description: string;
}

const Command = ({ className, title, description }: CommandProps) => (
  <div tw="flex flex-row" className={className}>
    <span tw="w-3/12 font-bold">{title}</span>
    <span tw="w-9/12">→ {description}</span>
  </div>
);

Command.defaultProps = {
  className: null,
};

export { Command };
