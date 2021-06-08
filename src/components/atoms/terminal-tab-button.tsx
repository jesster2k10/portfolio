/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import 'twin.macro';
import '@emotion/core';
import React from 'react';
import { colors } from '@/lib/theme';

type TerminalTabButtonType = 'close' | 'expand' | 'minimize';

interface TerminalTabButtonProps {
  className?: string;
  type: TerminalTabButtonType;
  onClick?: () => void;
}

const TerminalTabButton = ({
  className,
  type,
  onClick,
}: TerminalTabButtonProps) => {
  const colorMap: Record<TerminalTabButtonType, string> = {
    close: colors.red[600],
    expand: 'rgb(53, 205, 75)',
    minimize: 'rgb(254, 196, 56)',
  };
  const color = colorMap[type];
  const size = '0.85rem';

  return (
    <button
      type="button"
      aria-label={type}
      tw="rounded-full focus:outline-none hover:opacity-75 transition-all ease-in-out duration-100"
      css={{ backgroundColor: color, height: size, width: size }}
      className={className}
      onClick={onClick}
    />
  );
};

TerminalTabButton.defaultProps = {
  className: null,
};

export { TerminalTabButton };
