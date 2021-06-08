/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import tw from 'twin.macro';
import React, { useState } from 'react';
import ReactTerminal, {
  TerminalTheme,
  ReactThemes,
  ReactOutputRenderers,
} from 'react-terminal-component';
import {
  EmulatorState,
  Outputs,
  OutputFactory,
  defaultCommandMapping,
  CommandMapping,
} from 'javascript-terminal';
import Draggable from 'react-draggable';
import { colors } from '@/lib/theme';
import { Global, css } from '@emotion/core';
import { TerminalTabs } from '../molecules/terminal-tabs';
import { TerminalMessage } from '../molecules/terminal-message';
import {
  OUTPUT_TYPE,
  TerminalOutput,
  createOutputRecord,
  TerminalOutputContent,
} from '../molecules/terminal-output';

interface TerminalCommand extends TerminalOutputContent {
  prompt: string;
}

interface TerminalProps {
  className?: string;
  initialMessage?: React.ReactNode;
  initialMessageDelay?: number;
  initialPrompt?: string;
  animateMessage?: boolean;
  commands?: TerminalCommand[];
  onClose?: () => void;
  onMinimize?: () => void;
  onExpand?: () => void;
}

const Terminal = ({
  className,
  initialMessageDelay,
  initialMessage,
  animateMessage,
  initialPrompt,
  commands = [],
  onClose,
  onMinimize,
  onExpand,
}: TerminalProps) => {
  const theme: TerminalTheme = {
    ...ReactThemes.magpie,
    background: colors.nightSky[500],
    height: '65vh',
    fontFamily: 'JetBrains Mono',
  };
  const [doneTyping, setDoneTyping] = useState(
    !(animateMessage && initialMessage),
  );
  const customCommandMappings = commands.reduce(
    (initial, current) => ({
      ...initial,
      [current.prompt]: {
        function: () => ({
          output: createOutputRecord({
            output: current.output,
            outputComponent: current.outputComponent,
          }),
        }),
        optDef: {},
      },
    }),
    {},
  );

  const commandMapping = CommandMapping.create({
    ...defaultCommandMapping,
    ...customCommandMappings,
  });
  const defaultState = EmulatorState.create({
    commandMapping,
  });
  const emulatorState = defaultState.setOutputs(
    Outputs.addRecord(
      defaultState.getOutputs(),
      OutputFactory.makeTextOutput(!animateMessage && initialMessage),
    ),
  );

  return (
    <>
      <Draggable handle="[data-handle]">
        <div
          tw="flex flex-col w-full mx-3 md:mx-0 max-w-xl shadow-lg"
          className={className}
        >
          <div data-handle>
            <TerminalTabs
              onExpand={onExpand}
              onClose={onClose}
              onMinimize={onMinimize}
              title="jesseonolememen.sh"
              tw="cursor-move"
            />
          </div>
          <div tw="flex flex-col px-2 pt-2 bg-nightSky-500 rounded-b-sm">
            {initialMessage && animateMessage && (
              <TerminalMessage
                tw="pt-1 pb-2"
                onFinish={() => setDoneTyping(true)}
                message={initialMessage}
                typingDelay={initialMessageDelay}
              />
            )}
            <div
              tw="transition-all ease-in-out duration-300 font-code"
              css={{ opacity: doneTyping ? 100 : 0 }}
            >
              <ReactTerminal
                theme={theme}
                acceptInput={doneTyping}
                emulatorState={emulatorState}
                inputStr={initialPrompt}
                outputRenderers={{
                  ...ReactOutputRenderers,
                  [OUTPUT_TYPE]: TerminalOutput,
                }}
              />
            </div>
          </div>
        </div>
      </Draggable>
      <Global
        styles={css`
          .terminalOutput > div {
            ${tw`mb-2`}
          }
        `}
      />
    </>
  );
};

Terminal.defaultProps = {
  className: null,
  initialMessage: null,
  initialPrompt: null,
  initialMessageDelay: 40,
  animateMessage: true,
  commands: [],
};

export { Terminal };
