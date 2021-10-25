import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconHamburger from "../../assets/icons/IconHamburger.js";
import IconButton from "@mui/material/IconButton";
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
      </Stack>
      <IconButton sx={sx_mainAction} children={<IconHamburger />} />
    </AppBarTop>
  );
}

export default Header;

const sx_nav = {
  flexDirection: "row",
  alignItems: "center",
  display: { xs: "none", md: "flex" },
  gap: 3,
};

const sx_logo = {
  fontSize: "1.5rem",
};

const sx_mainAction = {
  display: { xs: "block", md: "none" },
};
