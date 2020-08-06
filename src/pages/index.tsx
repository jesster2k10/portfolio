import 'twin.macro';
import React from 'react';
import { PageProps } from 'gatsby';
import { Terminal } from '@/components/organisms/terminal';
import { HelpOutput } from '@/components/molecules/help-output';

const Home: React.FC<PageProps> = () => (
  <Terminal
    initialMessage={
      <ul tw="flex flex-col w-full whitespace-pre-wrap">
        <li tw="leading-relaxed">
          Hey there, I&apos;m Jesse and welcome to my online resumé. I&apos;m a
          full-stack developer, designer &amp; entrepreneur from Ireland.
        </li>
        <li tw="mt-2 mb-1">
          I&apos;ve got <i tw="underline">a lot</i> to share. So type{' '}
          <strong>help</strong>, or to get started.
        </li>
      </ul>
    }
    initialPrompt="help"
    animateMessage={false}
    commands={[{ prompt: 'help', outputComponent: HelpOutput }]}
  />
);
export default Home;
