import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout/Layout";
import HomeSection3 from "../components/PageIndex/HomeSection3";

export default function PageHome({ data, pageContext }) {
  const page = data.allDatoCmsPagesScootin.nodes[0];
  const [section1, section2, section3] = page.sections;
  console.log(page);
  return (
    <Layout pageContext={pageContext}>
      <HomeSection3 content={section3} />
    </Layout>
  );
}

export const query = graphql`
  query template_home($slug: String, $locale: String) {
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
              ... on DatoCmsTextIllustration {
                id
                description
                illustration {
                  gatsbyImageData
                  alt
                }
              }
              ... on DatoCmsPointIllustration {
                id
                title
                description
                illustration {
                  alt
                  gatsbyImageData
                }
              }
              ... on DatoCmsPointIllustrationLinkint {
                id
                anchor
                title
                description
                slug
                illustration {
                  alt
                  gatsbyImageData
                }
              }
            }
          }
        }
      }
    }
  }
`;
