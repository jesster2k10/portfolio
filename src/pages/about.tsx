import React from 'react';
import 'twin.macro';

export default function About() {
  return (
    <div tw="font-code text-sm text-center space-y-4 leading-loose">
      <p>
        Hey
        <span role="img" aria-label="wave">
          👋
        </span>
        My name is Jesse Onolememen (Ono-le-me-men).
        <br />
        I&apos;m a second-year Electrical &amp; Electronic Engineering student
        at the University College Dublin, Ireland{' '}
        <em>(anticipated graduation may 2024)</em>
      </p>
      <p>
        I&apos;m a self-taught programmer and have been coding since 2013. In
        the early days, I worked with Java. Mostly on android dev projects
        before switching over to Swift which I stuck with until about 2017 when
        I found React. Ever since then, react &amp; typescript have been my go
        tos{' '}
        <span role="img" aria-label="fist bump">
          👊
        </span>
      </p>
      <p>
        Outside programming, I&amp;m a hobbyist baker and cake decorator, an
        avid music fan and{' '}
        <a
          tw="underline"
          rel="noopener noreferrer"
          target="_blank"
          href="https://oneplusone.co"
        >
          own my own clothing brand.
        </a>{' '}
        I do some photography, videography, screen printing and design work from
        time to time.
      </p>
    </div>
  );
}
