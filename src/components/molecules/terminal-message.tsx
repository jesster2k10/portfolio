/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import React from 'react';
import styled from '@emotion/styled';
import Typist from 'react-typist';
import tw from 'twin.macro';

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
    tw="ml-2 font-code text-xs"
  >
    <Message>{message}</Message>
  </Typist>
);

export const Message = styled.span`
  ${tw`font-code`}
`;

TerminalMessage.defaultProps = {
  className: null,
  typingDelay: 40,
};

export { TerminalMessage };
