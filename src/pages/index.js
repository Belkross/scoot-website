import React from "react";
import Container from "@mui/material/Container";
import Layout from "../components/Layout/Layout";
import Introduction from "../components/PageIndex/Introduction";
import Part1 from "../components/PageIndex/Part1";
import Part2 from "../components/PageIndex/Part2";
import { graphql } from "gatsby";

const PageIndex = ({ data }) => {
  const { PageIndex: content } = data.contentYaml;
  return (
    <Layout>
      <Introduction content={content.introduction} />
      <Container>
        <Part1 content={content.part1} />
        <Part2 content={content.part2} />
      </Container>
    </Layout>
  );
};

export default PageIndex;

export const query = graphql`
  query PageIndex {
    contentYaml {
      PageIndex {
        introduction {
          button
          description
          illustration_desktop {
            relativePath
          }
          illustration_tablet {
            relativePath
          }
          illustration_mobile {
            relativePath
          }
          illustration_alt
          title
        }
        part1 {
          title
          step1 {
            title
            description
            illustration {
              relativePath
            }
            illustration_alt
          }
          step2 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
          step3 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
        }
        part2 {
          button
          section1 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
          section2 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
          section3 {
            title
            description
            illustration_alt
            illustration {
              relativePath
            }
          }
        }
      }
    }
  }
`;
