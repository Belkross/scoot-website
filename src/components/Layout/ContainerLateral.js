import React from "react";
import { PageContext } from "../MyComponents/PageContextProvider";
import Container from "@mui/material/Container";

export default function ContainerLateral({ children }) {
  const context = React.useContext(PageContext);
  const currentPage = context.slug;

  if (currentPage === "home") {
    return children;
  } else {
    return <Container component="main">{children}</Container>;
  }
}

/* Home page has a full larger screen background image, that’s why I cannot
wrap it’s entire content with ContainerLateral */
