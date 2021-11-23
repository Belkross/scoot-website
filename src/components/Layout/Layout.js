import React from "react";
import HtmlAttributesAndHead from "./HtmlAttributesAndHead";
import Header from "./Header";
import Footer from "./Footer";
import PageTransition from "./PageTransition";
import ContainerVertical from "./ContainerVertical";
import DialogFakeWebsite from "../MyComponents/DialogFakeWebsite";
import PageContextProvider from "../MyComponents/PageContextProvider";
import Container from "@mui/material/Container";

export default function Layout({ children, pageContext }) {
  return (
    <PageContextProvider pageContext={pageContext}>
      <DialogFakeWebsite>
        <HtmlAttributesAndHead />
        <ContainerVertical>
          <Header />
          <PageTransition>
            <Container component="main">{children}</Container>
          </PageTransition>
          <Footer />
        </ContainerVertical>
      </DialogFakeWebsite>
    </PageContextProvider>
  );
}
