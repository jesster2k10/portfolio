// This file holds ambient type declarations.
declare module 'tailwind-config' {
  interface TailwindConfig {
    config: (path: any) => Record<string, any>;
    theme: (
      path: string,
    ) => {
      colors: Record<string, string[]>;
      screens: Record<string, any>;
      spacing: Record<string, string>;
    };
  }

  const tailwindConfig: TailwindConfig;
  export default tailwindConfig;
}

declare module 'react-terminal-component' {
  import { Component } from 'react';

  export interface TerminalTheme {
    background?: string;
    promptSymbolColor?: string;
    commandColor?: string;
    outputColor?: string;
    errorOutputColor?: string;
    fontSize?: string | number;
    spacing?: string | number;
    fontFamily?: string;
    width?: string | number;
    height?: string | number;
  }

  export type TerminalEmulatorState = any;

  export interface TerminalStatelessCommonProps {
    acceptInput?: boolean;
    autoFocus?: boolean;
    clickToFocus?: boolean;
    outputRenderers?: Record<string, any>;
    promptSymbol?: string;
    terminalId?: string;
    theme?: TerminalTheme;
  }

  export interface TerminalStatelessProps extends TerminalStatelessCommonProps {
    emulatorState: TerminalEmulatorState;
    inputStr: string;
    onInputChange: (inputStr: string) => void;
    onStateChange: (state: TerminalEmulatorState) => void;
  }

  export interface TerminalProps extends TerminalStatelessCommonProps {
    emulatorState?: TerminalEmulatorState;
    inputStr?: string;
  }

  // eslint-disable-next-line react/prefer-stateless-function
  class Terminal extends Component<TerminalProps> {}

  export interface ReactThemesInstance {
    magpie: TerminalTheme;
    ember: TerminalTheme;
    dye: TerminalTheme;
    forest: TerminalTheme;
    hacker: TerminalTheme;
    sea: TerminalTheme;
    light: TerminalTheme;
  }

  export type ReactOutputRenderersInstance = Record<
    string,
    React.ComponentType<any>
  >;

  export const ReactThemes: ReactThemesInstance;
  export const ReactOutputRenderers: ReactOutputRenderersInstance;

  export { Terminal as ReactTerminal };
  export default Terminal;
}

declare module 'javascript-terminal';
