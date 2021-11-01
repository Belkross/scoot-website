import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import LinkMui from "../LinkMui.js";

function ButtonMenu(props) {
  const [drawerDisplay, setDrawerDisplay] = useState(false);
  const toggleDrawer = () => {
    setDrawerDisplay((prevState) => !prevState);
  };

  const list_tabs = props.tabs.map((tab) => {
    return (
      <LinkMui
        key={tab.name}
        to={tab.url}
        children={tab.name}
        onClick={toggleDrawer}
      />
    );
  });

  return (
    <Box display="inline">
      <IconButton
        /* variant="AppBar" // to applay a peculiar style */
        onClick={toggleDrawer}
        children={<MenuIcon />}
      />
      <Drawer anchor="right" open={drawerDisplay} onClose={toggleDrawer}>
        <Toolbar>
          <Stack>{list_tabs}</Stack>
        </Toolbar>
      </Drawer>
    </Box>
  );
}

export default ButtonMenu;

/*
  by default Toolbar is flex component with align-items: center
*/
