import React from 'react';
import { PageProps } from 'gatsby';
import 'twin.macro';

const NotFound: React.FC<PageProps> = () => (
  <div tw="font-code">
    <h1>:/ Page not found</h1>
  </div>
);

export default NotFound;
