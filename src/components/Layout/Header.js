import React from "react";
import Grid from "@mui/material/Grid";
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
      <Grid container component="nav" alignItems="center">
        <Grid item xs={6} md={2}>
          <Typography sx={sx_logo}>{content.logo}</Typography>
        </Grid>
        <Grid item sx={sx_tabsGrid} md={8}>
          <Stack sx={sx_tabs}>
            {list_tabs}
            <Button children={content.mainAction} />
          </Stack>
        </Grid>
        <Grid item xs={6} md={2} textAlign="right">
          <ButtonThemeMode
            onClick={props.onThemeModeTrigger}
            currentThemeMode={props.currentThemeMode}
          />
          <IconButton children={<MenuIcon />} />
        </Grid>
      </Grid>
    </AppBarTop>
  );
}

export default Header;

const sx_tabsGrid = {
  display: { xs: "none", md: "grid" },
};

const sx_tabs = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",

  gap: 2,
};

const sx_logo = {
  fontSize: "1.5rem",
};
