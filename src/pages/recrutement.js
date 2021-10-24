import React from "react";
import Layout from "../components/Layout/Layout";
import Container from "@mui/material/Container";
import Header from "../components/Header";
import Section1 from "../components/PageRecrutement/Section1";
import Section2 from "../components/PageRecrutement/Section2";
import Section3 from "../components/PageRecrutement/Section3";
import { graphql } from "gatsby";

function PageRecrutement({ data }) {
  const { PageRecrutement: content } = data.contentYaml;
  return (
    <Layout>
      <Header content={content.header}/>
      <Container component="main">
        <Section1 content={content.section1} />
        <Section2 content={content.section2} />
        <Section3 content={content.section3} />
      </Container>
    </Layout>
  );
}

export default PageRecrutement;
export const query = graphql`
  query PageRecrutement {
    contentYaml {
      PageRecrutement {
        header {
          illustration_alt
          title
          illustration {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        section1 {
          button
          description
          title
          illustration_alt
          illustration {
            relativePath
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        section2 {
          title
          article1 {
            description
            illustration_alt
            title
            illustration {
              relativePath
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          article2 {
            description
            illustration_alt
            title
            illustration {
              relativePath
              childImageSharp {
                gatsbyImageData
              }
            }
          }
          article3 {
            description
            illustration_alt
            title
            illustration {
              relativePath
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        section3 {
          article1 {
            location
            title
            button
          }
          article2 {
            location
            title
            button
          }
          article3 {
            location
            title
            button
          }
          article4 {
            location
            title
            button
          }
          article5 {
            location
            title
            button
          }
          article6 {
            location
            title
            button
          }
        }
      }
    }
  }
`;
