/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import 'twin.macro';
import React from 'react';
import { TerminalTabButton } from '../atoms/terminal-tab-button';

interface TerminalTabsProps {
  className?: string;
  title?: string;
}

const TerminalTabs = ({ className, title }: TerminalTabsProps) => (
  <div
    tw="flex flex-row justify-between items-center bg-nightSky-700 px-3 py-2 rounded-t-md relative"
    className={className}
  >
    <div tw="flex flex-row">
      <TerminalTabButton type="close" tw="mr-1" />
      <TerminalTabButton type="minimize" tw="mr-1" />
      <TerminalTabButton type="expand" />
    </div>
    {title && (
      <div tw="absolute inset-0 flex justify-center items-center pointer-events-none">
        <span tw="text-xs font-mono font-bold">{title}</span>
      </div>
    )}
    <div />
  </div>
);

TerminalTabs.defaultProps = {
  className: null,
  title: null,
};

export { TerminalTabs };
