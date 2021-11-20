import React from "react";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import { useStaticQuery, graphql } from "gatsby";
import PageTransition from "./PageTransition";
import ContainerVertical from "./ContainerVertical";
import LocaleProvider from "../MyComponents/LocaleProvider";
import SlugProvider from "../MyComponents/SlugProvider";
import DialogFakeWebsite from "../MyComponents/DialogFakeWebsite";

function Layout({ children, PageContext }) {
  const data = useStaticQuery(query);

  return (
    <LocaleProvider
      pageLocale={PageContext.locale}
      supportedLocales={PageContext.supportedLocales}
    >
      <SlugProvider slug={PageContext.slug}>
        <DialogFakeWebsite>
          <HtmlAttributesAndHead
            siteMetadata={data.site.siteMetadata}
            favicon={data.contentYaml.general.favicon.publicURL}
            language="fr"
          />
          <ContainerVertical>
            <Header PageContext={PageContext} />
            <PageTransition>{children}</PageTransition>
            <Footer PageContext={PageContext} />
          </ContainerVertical>
        </DialogFakeWebsite>
      </SlugProvider>
    </LocaleProvider>
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
