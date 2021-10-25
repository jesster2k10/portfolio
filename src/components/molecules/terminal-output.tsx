/* eslint-disable implicit-arrow-linebreak */
/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import 'twin.macro';
import React from 'react';
import { OutputFactory } from 'javascript-terminal';

export interface TerminalOutputContent {
  output?: React.ReactNode;
  outputComponent?: React.ComponentType<any>;
}

interface TerminalOutputProps {
  content: TerminalOutputContent;
}

export const OUTPUT_TYPE = 'custom-output';

const TerminalOutput = ({
  content: { output, outputComponent: OutputComponent },
}: TerminalOutputProps) => {
  if (OutputComponent) {
    return (
      <div tw="text-sm font-code">
        <OutputComponent output={output} />
      </div>
    );
  }

  return <div tw="text-xs">{output}</div>;
};

export const createOutputRecord = (content: TerminalOutputContent) =>
  new OutputFactory.OutputRecord({
    type: OUTPUT_TYPE,
    content,
  });

TerminalOutput.defaultProps = {
  className: null,
  output: null,
  outputComponent: null,
};

export { TerminalOutput };
