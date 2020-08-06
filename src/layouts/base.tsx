import tw from 'twin.macro';
import React from 'react';
import { Header } from '@/components/molecules/header';
import { Footer } from '@/components/molecules/footer';
import { Global, css } from '@emotion/core';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => (
  <div tw="flex flex-col justify-center items-center bg-deepSea-700 text-white min-h-screen">
    <Header />
    <main
      tw="flex flex-col justify-center items-center"
      css={{ minHeight: '65vh' }}
    >
      {children}
    </main>
    <Footer tw="mt-4" />
    <Global
      styles={css`
        .active-link {
          ${tw`underline font-bold`}
        }
      `}
    />
  </div>
);

export { BaseLayout };
