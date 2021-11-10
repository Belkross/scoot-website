import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ButtonThemeMode from "../ButtonThemeMode.js";
import AppBarTop from "../AppBarTop.js";
import ButtonMainAction from "../ButtonMainAction.js";
import ButtonMenu from "./ButtonMenu.js";
import Logo from "../MyComponents/Logo";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import LinkNavBar from "../LinkNavbar.js";

function Header(props) {
  const { content, dato } = props;
  const array_tabs = Object.values(content.tabs);
  const list_tabs = dato.map((tab) => {
    return (
      <LinkNavBar
        key={tab.id}
        path={tab.path}
        name={tab.name}
        linkType={tab.linkType}
        menuItems={tab.menuItems}
      />
    );
  });

  return (
    <AppBarTop>
      <Grid container component="nav" alignItems="center">
        <Grid item xs={6} b9={2}>
          <Logo
            name={content.logo}
            illustration={<SportsMotorsportsIcon fontSize="large" />}
          />
        </Grid>
        <Grid item sx={sx_GridTabs} md={8}>
          <Stack sx={sx_tabs}>
            {list_tabs}
            <ButtonMainAction children={content.mainAction} />
          </Stack>
        </Grid>
        <Grid item xs={6} b9={2}>
          <Stack
            direction="row"
            spacing={1}
            justifyContent="flex-end"
            alignItems="center"
          >
            <ButtonThemeMode
              onClick={props.onThemeModeTrigger}
              currentThemeMode={props.currentThemeMode}
            />
            <ButtonMenu tabs={array_tabs} />
          </Stack>
        </Grid>
      </Grid>
    </AppBarTop>
  );
}

export default Header;

const sx_GridTabs = {
  display: { xs: "none", b9: "grid" },
};

const sx_tabs = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 1,
};

/* 
to adjust when all tabs have to disapear, 3 breakpoints to change : 
  -first grid item last breakpoint
  -third grid item last breakpoint
  -sx_GridTabs last breakpoint
*/
