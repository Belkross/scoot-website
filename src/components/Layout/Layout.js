import React from "react";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import { useStaticQuery, graphql } from "gatsby";
import PageTransition from "./PageTransition";
import ContainerVertical from "./ContainerVertical";
import LangueProvider from "../MyComponents/LangueProvider";
import MuiThemeProvider from "../MyComponents/MuiThemeProvider";

function Layout({ children }) {
  const data = useStaticQuery(query);
  const { contentYaml: content } = data;
  const { links: datoContent } =
    data.allDatoCmsNavigationBar.nodes[0].groupMixedLink[0];

  return (
    <MuiThemeProvider>
      <LangueProvider>
        <HtmlAttributesAndHead
          siteMetadata={data.site.siteMetadata}
          favicon={data.contentYaml.general.favicon.publicURL}
          language="fr"
        />
        <ContainerVertical>
          <Header content={content.header} dato={datoContent} />
          <PageTransition>{children}</PageTransition>
          <Footer content={content} />
        </ContainerVertical>
      </LangueProvider>
    </MuiThemeProvider>
  );
}

export default Layout;

const query = graphql`
  query component_layout {
    allDatoCmsNavigationBar {
      nodes {
        groupMixedLink {
          links {
            ... on DatoCmsLinkInternal {
              id
              name
              path
              linkType
            }
            ... on DatoCmsLinkMenu {
              id
              name
              linkType
              menuItems {
                path
                name
                id
                linkType
              }
            }
          }
        }
        locale
      }
    }
    site {
      siteMetadata {
        description
        title
        charset
      }
    }
    contentYaml {
      general {
        favicon {
          publicURL
        }
        social_media {
          facebook {
            name
            website
          }
          instagram {
            name
            website
          }
          linkedin {
            name
            website
          }
          twitter {
            name
            website
          }
        }
      }
      header {
        logo
        mainAction
        tabs {
          tab1 {
            name
            url
          }
          tab2 {
            name
            url
          }
          tab3 {
            name
            url
          }
          tab4 {
            name
            url
          }
        }
      }
      footer {
        contact {
          address
          mail
          name
        }
        download {
          icon_alt1
          icon_alt2
          title
          icon1 {
            publicURL
          }
          icon2 {
            publicURL
          }
        }
        copyright
      }
    }
  }
`;
