import React from "react";
import Box from "@mui/material/Box";
import FooterPart1 from "./FooterPart1";
import FooterPart2 from "./FooterPart2";
import { useStaticQuery, graphql } from "gatsby";
import { PageContext } from "../MyComponents/PageContextProvider";

function Footer(props) {
  const data = useStaticQuery(query);
  const context = React.useContext(PageContext);
  
  const footerContent = data.allDatoCmsFooterScootin.nodes.find(
    (node) => node.locale === context.locale
  );
  const generalContent = data.allDatoCmsGeneral.nodes.find(
    (node) => node.locale === context.locale
  );

  return (
    <Box component="footer" id="footer">
      <FooterPart1 content={{ ...footerContent, ...generalContent }} />
      <FooterPart2 content={generalContent} />
    </Box>
  );
}

export default Footer;

const query = graphql`
  query component_footer {
    allDatoCmsGeneral(filter: { name: { eq: "Scootin" } }) {
      nodes {
        name
        line4
        line3
        line2
        line1
        mail
        phone
        copyright
        externalWebsite {
          id
          name
          url
          icon {
            url
            alt
          }
        }
        locale
      }
    }
    allDatoCmsFooterScootin {
      nodes {
        title
        icons {
          alt
          url
        }
        locale
      }
    }
  }
`;
