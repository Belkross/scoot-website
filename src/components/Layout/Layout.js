import React from "react";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import ContainerVertical from "./ContainerVertical";
import DialogFakeWebsite from "../MyComponents/DialogFakeWebsite";
import PageContextProvider from "../MyComponents/PageContextProvider";

export default function Layout({ children, pageContext }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <DialogFakeWebsite>
        <HtmlAttributesAndHead />
        <ContainerVertical>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ContainerVertical>
      </DialogFakeWebsite>
    </PageContextProvider>
  );
}
