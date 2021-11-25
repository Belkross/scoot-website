import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { PageContext } from "./MyComponents/PageContextProvider";

export default function AppBarTop({ children }) {
  const context = React.useContext(PageContext);
  const currentPage = context.slug;

  return (
    <AppBar
      position="sticky"
      sx={currentPage === "home" ? sx_container : sx_containerWithMargin}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
}

const sx_container = {
  backgroundColor: "background.navBar",
  backgroundImage: "none", //this prevent the AppBar component from taking another color from paper
};

//I had to add this feature because home page has a full larger screen background image
const sx_containerWithMargin = {
  ...sx_container,
  mb: { xs: 4, md: 6, lg: 8 },
};

/*AppBar has a header markup by default*/
