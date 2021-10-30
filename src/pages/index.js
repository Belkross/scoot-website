import React from "react";
import Container from "@mui/material/Container";
import Layout from "../components/Layout/Layout";
import PageHeader from "../components/PageIndex/PageHeader";
import Section2 from "../components/PageIndex/Section2";
import Section3 from "../components/PageIndex/Section3";
import { graphql } from "gatsby";

const PageIndex = ({ data }) => {
  const { page_index: content } = data.contentYaml;
  return (
    <Layout>
      <PageHeader content={content.section1} />
      <Container component="main">
        <Section2 content={content.section2} />
        <Section3 content={content.section3} />
      </Container>
    </Layout>
  );
};

export default PageIndex;

export const query = graphql`
  query page_index {
    contentYaml {
      page_index {
        section1 {
          button
          description
          illustration {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          illustration_alt
          title
        }
        section2 {
          title
          articles {
            article1 {
              title
              description
              illustration {
                publicURL
              }
              illustration_alt
            }
            article2 {
              title
              description
              illustration_alt
              illustration {
                publicURL
              }
            }
            article3 {
              title
              description
              illustration_alt
              illustration {
                publicURL
              }
            }
          }
        }
        section3 {
          button
          articles {
            article1 {
              title
              description
              illustration_alt
              illustration {
                childImageSharp {
                  gatsbyImageData
                }
              }
              link
              linkPath
            }
            article2 {
              title
              description
              illustration_alt
              illustration {
                childImageSharp {
                  gatsbyImageData
                }
              }
              link
              linkPath
            }
            article3 {
              title
              description
              illustration_alt
              illustration {
                childImageSharp {
                  gatsbyImageData
                }
              }
              link
              linkPath
            }
          }
        }
      }
    }
  }
`;
