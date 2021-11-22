import React from "react";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import { useStaticQuery, graphql } from "gatsby";
import PageTransition from "./PageTransition";
import ContainerVertical from "./ContainerVertical";
import DialogFakeWebsite from "../MyComponents/DialogFakeWebsite";
import PageContextProvider from "../MyComponents/PageContextProvider";

function Layout({ children, pageContext }) {
  const data = useStaticQuery(query);

  return (
    <PageContextProvider pageContext={pageContext}>
      <DialogFakeWebsite>
        <HtmlAttributesAndHead
          siteMetadata={data.site.siteMetadata}
          favicon={data.contentYaml.general.favicon.publicURL}
          language="fr"
        />
        <ContainerVertical>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ContainerVertical>
      </DialogFakeWebsite>
    </PageContextProvider>
  );
}

export default Layout;

const query = graphql`
  query component_layout {
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
    }
  }
`;
