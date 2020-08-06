/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import 'twin.macro';
import React from 'react';
import styled from '@emotion/styled';
import Typist from 'react-typist';

interface TerminalMessageProps {
  className?: string;
  message?: React.ReactNode;
  onFinish?: () => void;
  typingDelay?: number;
}

const TerminalMessage = ({
  className,
  message,
  onFinish,
  typingDelay,
}: TerminalMessageProps) => (
  <Typist
    onTypingDone={onFinish}
    cursor={{ blink: true, hideWhenDone: true }}
    className={className}
    avgTypingDelay={typingDelay}
    tw="ml-2"
  >
    <Message>{message}</Message>
  </Typist>
);

export const Message = styled.span`
  font-family: monospace;
  font-size: 1.1em;
`;

TerminalMessage.defaultProps = {
  className: null,
  typingDelay: 40,
};

export { TerminalMessage };
