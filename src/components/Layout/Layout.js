import React from "react";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import { useStaticQuery, graphql } from "gatsby";
import PageTransition from "./PageTransition";
import ContainerVertical from "./ContainerVertical";
import LocaleProvider from "../MyComponents/LocaleProvider";
import SlugProvider from "../MyComponents/SlugProvider";
import MuiThemeProvider from "../MyComponents/MuiThemeProvider";

function Layout({ children, PageContext }) {
  const data = useStaticQuery(query);
  const { contentYaml: content } = data;
  const headerContent = data.allDatoCmsHeaderScootin.nodes.find(
    (node) => node.locale === PageContext.locale
  );

  return (
    <MuiThemeProvider>
      <LocaleProvider supportedLocales={PageContext.supportedLocales}>
        <SlugProvider slug={PageContext.slug}>
          <HtmlAttributesAndHead
            siteMetadata={data.site.siteMetadata}
            favicon={data.contentYaml.general.favicon.publicURL}
            language="fr"
          />
          <ContainerVertical>
            <Header content={headerContent} />
            <PageTransition>{children}</PageTransition>
            <Footer content={content} />
          </ContainerVertical>
        </SlugProvider>
      </LocaleProvider>
    </MuiThemeProvider>
  );
}

export default Layout;

const query = graphql`
  query component_layout {
    allDatoCmsHeaderScootin {
      nodes {
        name
        navLinks {
          ... on DatoCmsInternalLink {
            id
            anchor
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsMenuLink {
            id
            anchor
            menuItems {
              anchor
              slug
              id
            }
            model {
              apiKey
            }
          }
        }
        mainAction
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
