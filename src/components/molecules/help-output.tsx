/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import tw from 'twin.macro';
import React from 'react';
import { Command } from '../atoms/command';

interface HelpOutputProps {
  className?: string;
  output: React.ReactNode;
}

const HelpOutput = ({ className }: HelpOutputProps) => {
  const commands = [
    {
      title: 'about',
      description: 'Learn more about who I am and what I do',
    },
    {
      title: 'my_work',
      description: 'View all my past, present and future projects',
    },
    {
      title: 'experience',
      description: 'Learn all about my professional experiences',
    },
    {
      title: 'skills',
      description: 'Learn about my versatile & varied skill-set',
    },
    {
      title: 'site_info',
      description: 'Learn about how this site was built.',
    },
    {
      title: 'exit',
      description:
        'Quit the interactive terminal and get straight to the good stuff.',
    },
  ];

  return (
    <div tw="flex flex-col font-code text-xs" className={className}>
      <Title>Commands:</Title>
      <ul tw="mt-2">
        {commands.map((command) => (
          <Command
            title={command.title}
            description={command.description}
            key={command.title}
            tw="mb-1"
          />
        ))}
      </ul>
      <section tw="flex flex-col">
        <Title>Notes:</Title>
        <ul tw="list-disc mt-2">
          <li>
            You can close this window at any time or type <strong>exit</strong>{' '}
            to view the main site.
          </li>
        </ul>
      </section>
    </div>
  );
};

const Title = tw.div`font-bold text-xs font-code uppercase`;

HelpOutput.defaultProps = {
  className: null,
};

export { HelpOutput };
