import React, { useState } from 'react';
import { graphql } from 'gatsby';
import 'twin.macro';
import { EducationItem } from '@/components/molecules/education-item';

interface EducationPageProps {
  data: {
    allMdx: {
      nodes: {
        id: string;
        frontmatter: {
          degree: string;
          end_date: string;
          start_date: string;
          school: string;
          edu_type: string;
        };
      }[];
    };
  };
}

const EducationPage = ({ data: { allMdx } }: EducationPageProps) => {
  const { nodes } = allMdx;
  const [viewRawData, setViewRawData] = useState(false);

  return (
    <div tw="w-full flex flex-col">
      <button
        type="button"
        tw="ml-auto self-end uppercase text-xs font-bold mb-12"
        onClick={() => setViewRawData(!viewRawData)}
      >
        View Raw Data
      </button>
      {viewRawData ? (
        <pre>{JSON.stringify(nodes, null, 2)}</pre>
      ) : (
        nodes.map((node) => (
          <EducationItem
            key={node.id}
            schoolName={node.frontmatter.school}
            startingDate={node.frontmatter.start_date}
            endingDate={node.frontmatter.end_date}
            degreeName={node.frontmatter.degree}
            educationType={node.frontmatter.edu_type}
          />
        ))
      )}
    </div>
  );
};

export const query = graphql`
  {
    allMdx(filter: { frontmatter: { type: { eq: "education" } } }) {
      nodes {
        id
        frontmatter {
          degree
          end_date
          start_date
          school
          edu_type
        }
      }
    }
  }
`;
export default EducationPage;
