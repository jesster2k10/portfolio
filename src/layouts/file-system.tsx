import React from 'react';
import { BaseLayout } from './base';

interface FileSystemLayoutProps {
  children: React.ReactNode;
}

const FileSystemLayout = ({ children }: FileSystemLayoutProps) => (
  <BaseLayout>
    <section>
      <aside />
      <main>{children}</main>
    </section>
  </BaseLayout>
);

export { FileSystemLayout };
