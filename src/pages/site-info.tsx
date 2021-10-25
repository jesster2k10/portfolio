import React from 'react';
import 'twin.macro';

const renderLink = (title: string, href: string) => (
  <strong>
    <a
      tw="underline hover:opacity-75 transition-all ease-in-out duration-150"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {title}
    </a>
  </strong>
);

const SiteInfoPage = () => (
  <div tw="max-w-lg font-code text-sm leading-relaxed text-center">
    <p tw="font-medium mb-2">
      This site was built{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>{' '}
      using {renderLink('Gatsby.js', 'https://www.gatsbyjs.com/')}.
    </p>
    <p tw="mb-3">
      Gatsby is a static site generator for React. <br /> The codebase was
      written with {renderLink('Typescript', 'https://www.typescriptlang.org/')}{' '}
      and structured according to{' '}
      {renderLink(
        'Atomic Design Principles',
        'https://codeburst.io/atomic-design-with-react-e7aea8152957',
      )}
      . You can peek at the source code here.
    </p>
    <p>
      Styling is handled with{' '}
      {renderLink('TailwindCSS', 'https://tailwindcss.com/')}
      : a utility first CSS framework
      <br />
      And{' '}
      {renderLink('twin.macro', 'https://github.com/ben-rogerson/twin.macro')}:
      blends the magic of TailwindCSS with the flexibility of{' '}
      <strong>CSS-in-JS</strong>
    </p>
  </div>
);

export default SiteInfoPage;
