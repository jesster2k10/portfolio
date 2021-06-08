/**
 * Created by Jesse Onolememen. 05/08/2020
 */

import 'twin.macro';
import React from 'react';
import {
  FaStackOverflow,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa';
import { graphql, Link, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
import resumeLink from '../../downloads/resume-jesse-onolememen.pdf';

interface FooterProps {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  const {
    site: {
      metadata: { socials, contact },
    },
  } = useStaticQuery(graphql`
    {
      site {
        metadata: siteMetadata {
          socials {
            github
            stackOverflow
          }

          contact {
            email
          }
        }
      }
    }
  `);

  const emailLink = `mailto:${contact.email}?subject=Hey%2C%20Let's%20Connect!`;

  return (
    <footer tw="flex flex-col" className={className}>
      <Nav tw="space-x-3 flex justify-center items-center">
        <Link to={socials.stackOverflow}>
          <FaStackOverflow />
        </Link>
        <Link to={socials.github}>
          <FaGithub />
        </Link>
        <Link to={socials.linkedIn}>
          <FaLinkedin />
        </Link>
        <a href={emailLink}>
          <FaEnvelope />
        </a>
      </Nav>

      <ExtraContent tw="text-xs opacity-50 mt-4 flex flex-col items-center space-y-2">
        <a href={resumeLink}>Download my resumé (PDF)</a>
        <a href={emailLink}>
          Send me an email{' '}
          <span role="img" aria-label="Wave">
            👋
          </span>
        </a>
      </ExtraContent>
    </footer>
  );
};

const Nav = styled.div`
  a {
    transition: all ease-in-out 100ms;
    &:hover {
      opacity: 0.75;
    }
  }
`;

const ExtraContent = styled.div`
  a {
    transition: all ease-in-out 100ms;
    &:hover {
      text-decoration: underline;
    }
  }
`;

Footer.defaultProps = {
  className: null,
};

export { Footer };
