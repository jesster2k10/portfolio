import 'twin.macro';
import React, { useState } from 'react';
import { PageProps } from 'gatsby';
import { Terminal } from '@/components/organisms/terminal';
import { HelpOutput } from '@/components/molecules/help-output';
import { HomeMessage } from '@/components/organisms/home-message';
import SiteInfoPage from './site-info';
import AboutPage from './about';
import Experiences from './experiences';
import Work from './work';

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
          commands={[
            { prompt: 'help', outputComponent: HelpOutput },
            {
              prompt: 'about',
              outputComponent: AboutPage,
            },
            {
              prompt: 'site_info',
              outputComponent: SiteInfoPage,
            },
            {
              prompt: 'experience',
              outputComponent: Experiences,
            },
            {
              prompt: 'my_work',
              outputComponent: Work,
            },
            {
              prompt: 'skills',
              outputComponent: () => (
                <div tw="space-y-4 mb-5">
                  <div tw="space-y-3">
                    <span tw="font-bold mb-4">Languages</span>
                    <ul>
                      <li>Swift (Expert, since 2014)</li>
                      <li>Java (Intermediate, since 2013)</li>
                      <li>Javascript (Expert, since 2017)</li>
                      <li>Typescript (Expert, since 2018)</li>
                      <li>Python (Beginner, since 2020)</li>
                      <li>MATLAB (Intermediate, since 2020)</li>
                      <li>C (Intermediate, since 2021)</li>
                    </ul>
                  </div>

                  <div tw="space-y-3">
                    <span tw="font-bold">Frameworks</span>
                    <ul>
                      <li>UIKit (Pro, since 2014)</li>
                      <li>SwiftUI (Intermediate, since 2020)</li>
                      <li>Ruby on Rails (Pro, since 2018)</li>
                      <li>React (Expert, since 2018)</li>
                      <li>React Native (Expert, since 2017)</li>
                      <li>ExpressJs (Pro, since 2017)</li>
                    </ul>
                  </div>

                  <div tw="space-y-3">
                    <span tw="font-bold">Non-technical</span>
                    <ul>
                      <li>Business management</li>
                      <li>Video editing, VFX, Video production</li>
                      <li>Graphic design, UI design</li>
                      <li>Social media management</li>
                    </ul>
                  </div>
                </div>
              ),
            },
          ]}
          onClose={() => setTerminalState('closed')}
        />
      )}
    </>
  );
};

export default Home;
