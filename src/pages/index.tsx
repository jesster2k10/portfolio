import 'twin.macro';
import React, { useState } from 'react';
import { PageProps } from 'gatsby';
import { Terminal } from '@/components/organisms/terminal';
import { HelpOutput } from '@/components/molecules/help-output';
import { HomeMessage } from '@/components/organisms/home-message';

type TerminalState = 'open' | 'closed' | 'minimized';

const Home: React.FC<PageProps> = () => {
  const [terminalState, setTerminalState] = useState<TerminalState>(() => {
    if (typeof window === 'undefined') return 'open';
    return (localStorage.getItem('terminal:state') as TerminalState) ?? 'open';
  });

  return (
    <>
      {terminalState === 'open' && (
        <Terminal
          initialMessage={<HomeMessage />}
          initialPrompt="help"
          animateMessage={false}
          commands={[{ prompt: 'help', outputComponent: HelpOutput }]}
          onClose={() => setTerminalState('closed')}
        />
      )}
    </>
  );
};

export default Home;
