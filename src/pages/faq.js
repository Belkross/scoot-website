import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "@mui/material/Container";
import PageHeader from "../components/PageHeader";
import Section1 from "../components/PageQuestions/Section1.js";
import Section2 from "../components/PageQuestions/Section2.js";

import { graphql } from "gatsby";

function PageFaq({ data }) {
  const { page_faq: content } = data.contentYaml;
  return (
    <Layout>
      <PageHeader content={content.page_header} />
      <Container component="main">
        <Section2 content={content.section2} />
        <Section1 content={content.section1} />
      </Container>
    </Layout>
  );
}

export default PageFaq;
export const query = graphql`
  query page_faq {
    contentYaml {
      page_faq {
        page_header {
          title
          illustration {
            childImageSharp {
              gatsbyImageData(quality: 100)
            }
          }
          illustration_alt
        }
        section1 {
          articles {
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
        }
        section2 {
          h2
          sectionA {
            articles {
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
            }

            h3
          }
          sectionB {
            h3
            articles {
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
  }
`;
