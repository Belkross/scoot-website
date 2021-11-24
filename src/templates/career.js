import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import CareerSection2 from "../components/template-career/CareerSection2";
import CareerSection1 from "../components/template-career/CareerSection1";

export default function PageCareer({ data, pageContext }) {
  const sections = data.allDatoCmsPagesScootin.nodes[0].sections;
  const [section1, section2] = sections;
  return (
    <Layout pageContext={pageContext}>
      <CareerSection1 content={section1} />
      <CareerSection2 content={section2} />
    </Layout>
  );
}

export const query = graphql`
  query template_career($slug: String, $locale: String) {
    allDatoCmsPagesScootin(
      filter: { slug: { eq: $slug }, locale: { eq: $locale } }
    ) {
      nodes {
        slug
        locale
        title
        sections {
          title
          components {
            id
            componentBlocks {
              ... on DatoCmsPointIllustration {
                id
                title
                description
                illustration {
                  alt
                  gatsbyImageData
                }
              }
              ... on DatoCmsPointLinkint {
                id
                anchor
                title
                slug
                description
              }
            }
          }
        }
      }
    }
  }
`;
