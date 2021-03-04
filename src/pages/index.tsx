import 'twin.macro';
import React from 'react';
import { PageProps } from 'gatsby';
import { Terminal } from '@/components/organisms/terminal';
import { HelpOutput } from '@/components/molecules/help-output';

const message = (
  // <ul tw="flex flex-col w-full whitespace-pre-wrap">
  //   <li tw="leading-relaxed">
  //     {/* Hey there, I&apos;m Jesse and welcome to my online resumé. I&apos;m a
  //     full-stack developer, designer &amp; entrepreneur from Ireland. */}
  //     Hey there 👋 My name is Jesse Onolememen and welcome to my online resumé.
  //     <br />
  //     I&apos;m a <strong>Electronic & Electrical Engineering</strong> undergrad
  //     at University College Dublin a full-time hobbyist developer (since 2014.)
  //   </li>
  //   <li tw="mt-2 mb-1">

  //   </li>
  // </ul>
  <div tw="flex flex-col w-full leading-relaxed whitespace-pre-wrap">
    <h1>
      Hey there{' '}
      <span role="img" aria-label="Wave">
        👋
      </span>{' '}
      My name is Jesse and welcome to my online resumé
    </h1>
    <h2 tw="mt-2">I&apos;m a...</h2>
    <ul tw="list-disc list-inside ml-2 mt-2 mb-1">
      <li>Engineering Student at University College Dublin (UCD)</li>
      <li>Self-taught Swift, Typescript & Ruby Developer</li>
      <li>
        Business owner & founder of{' '}
        <a
          href="https://oneplusone.co"
          target="_blank"
          rel="noopener noreferrer"
          tw="underline"
        >
          One Plus One Clothing
        </a>
      </li>
      <li>
        Contributor to{' '}
        <a
          href="https://github.com/jesster2k10"
          target="_blank"
          rel="noopener noreferrer"
          tw="underline"
        >
          open source projects
        </a>
      </li>
      <li>Visual creative, designer, editor</li>
    </ul>
    <h3
      tw="mb-2 border-b pb-4"
      css={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
    >
      and more...
      <br tw="mb-1" />
      So type help to get started
    </h3>
  </div>
);

const Home: React.FC<PageProps> = () => (
  <Terminal
    initialMessage={message}
    initialPrompt="help"
    animateMessage={false}
    commands={[{ prompt: 'help', outputComponent: HelpOutput }]}
  />
);
export default Home;
