import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonThemeMode from "../ButtonThemeMode.js";
import LinkMui from "../LinkMui.js";
import AppBarTop from "../AppBarTop.js";

function Header(props) {
  const { content } = props;
  const array_tabs = Object.values(content.tabs);
  const list_tabs = array_tabs.map((tab) => {
    return <LinkMui key={tab.name} to={tab.url} children={tab.name} />;
  });

  return (
    <AppBarTop>
      <Typography sx={sx_logo}>{content.logo}</Typography>
      <Stack component="nav" sx={sx_nav}>
        {list_tabs}
        <Button children={content.mainAction} />
        <ButtonThemeMode
          onClick={props.onThemeModeTrigger}
          currentThemeMode={props.currentThemeMode}
        />
      </Stack>
        <IconButton sx={sx_ButtonMenu} children={<MenuIcon />} />
    </AppBarTop>
  );
}

export default Header;

const sx_nav = {
  flexDirection: "row",
  alignItems: "center",
  display: { xs: "none", md: "flex" },
  gap: 2
};

const sx_logo = {
  fontSize: "1.5rem",
};

const sx_ButtonMenu = {
  display: { xs: "block", md: "none" },
};
