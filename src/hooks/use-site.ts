import { useStaticQuery, graphql } from 'gatsby';

interface Site {
  socials: {
    github: string;
    stackOverflow: string;
  };

  headerLinks: { title: string; href: string }[];
}

/**
 * Returns global site metadata
 */
export function useSite(): Site {
  const { site } = useStaticQuery(graphql`
    query UseSite {
      site {
        siteMetadata {
          socials {
            github
            stackOverflow
          }
          headerLinks {
            title
            href
          }
        }
      }
    }
  `);

  return site.siteMetadata;
}
