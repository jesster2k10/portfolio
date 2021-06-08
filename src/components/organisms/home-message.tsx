import 'twin.macro';
import React from 'react';

export const HomeMessage = () => (
  <div tw="flex font-code text-sm flex-col w-full leading-relaxed whitespace-pre-wrap">
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
      <br />
      So type help to get started
    </h3>
  </div>
);
