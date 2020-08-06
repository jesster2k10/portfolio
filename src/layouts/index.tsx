import React from 'react';
import { FileSystemLayout } from './file-system';
import { BaseLayout } from './base';

interface LayoutProps {
  children: React.ReactNode;
  pageContext?: any;
}

const Layout = ({ children, pageContext }: LayoutProps) => {
  const Component: React.ComponentType<any> = (() => {
    switch (pageContext.layout) {
      case 'file-system':
        return FileSystemLayout;
      default:
        return BaseLayout;
    }
  })();

  return <Component>{children}</Component>;
};

export default Layout;
