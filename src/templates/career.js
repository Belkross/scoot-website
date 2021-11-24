import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout/Layout";
import CareerSection2 from "../components/PageRecrutement/CareerSection2";

export default function PageCareer({ data, pageContext }) {
  const sections = data.allDatoCmsPagesScootin.nodes[0].sections
  const [section1, section2] = sections
  console.log(section1)
  return (
    <Layout pageContext={pageContext}>
      <h1>{data.allDatoCmsPagesScootin.nodes[0].title}</h1>
      <CareerSection2 content={section2}/>
    </Layout>
  );
}

export const query = graphql`
  query template_career ($slug: String, $locale: String) {
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
                  url
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
