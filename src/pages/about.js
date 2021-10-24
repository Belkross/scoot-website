import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Section1 from "../components/PageAbout/Section1";
import { graphql } from "gatsby";

function PageAbout({ data }) {
  const { page_about: content } = data.contentYaml;
  return (
    <Layout>
      <Header content={content.header} />
      <Container>
        <Section1 content={content.section1} />
      </Container>
    </Layout>
  );
}

export default PageAbout;
export const query = graphql`
  query page_about {
    contentYaml {
      page_about {
        header {
          title
          illustration {
            childImageSharp {
              gatsbyImageData
            }
          }
          illustration_alt
        }
        section1 {
          article1 {
            description
            title
            illustration_alt
            illustration {
              childImageSharp {
                gatsbyImageData
              }
            }
            button
          }
          article2 {
            title
            illustration_alt
            description
            illustration {
              childImageSharp {
                gatsbyImageData
              }
            }
            button
          }
        }
        section2 {
          h2
          sectionA {
            article1 {
              description
              title
            }
            article2 {
              description
              title
            }
            article3 {
              description
              title
            }
            h3
          }
          sectionB {
            h3
            article1 {
              title
              description
            }
            article2 {
              title
              description
            }
            article3 {
              title
              description
            }
          }
        }
      }
    }
  }
`;
