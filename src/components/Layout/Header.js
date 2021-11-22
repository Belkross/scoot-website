import React from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import ButtonThemeMode from "../ButtonThemeMode.js";
import AppBarTop from "../AppBarTop.js";
import ButtonMainAction from "../ButtonMainAction.js";
import ButtonMenu from "./ButtonMenu.js";
import Logo from "../MyComponents/Logo";
import SportsMotorsportsIcon from "@mui/icons-material/SportsMotorsports";
import NavBarLinkSelector from "../NavBarLinkSelector.js";
import ButtonLocale from "../MyComponents/ButtonLocale";
import { graphql, useStaticQuery } from "gatsby";
import { PageContext } from "../MyComponents/PageContextProvider.js";

function Header(props) {
  const data = useStaticQuery(query);
  const context = React.useContext(PageContext)
  const content = data.allDatoCmsHeaderScootin.nodes.find(
    (node) => node.locale === context.locale
  );

  const list_tabs = content.navLinks.map((tab) => {
    return (
      <NavBarLinkSelector
        key={tab.id}
        slug={tab.slug}
        anchor={tab.anchor}
        linkType={tab.model.apiKey}
        menuItems={tab.menuItems}
      />
    );
  });

  return (
    <AppBarTop>
      <Grid container component="nav" alignItems="center">
        <Grid item xs={6} b9={2}>
          <Logo
            name={content.name}
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
            <ButtonLocale />
            <ButtonThemeMode />
            <ButtonMenu tabs={content.navLinks} />
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

const query = graphql`
  query component_header {
    allDatoCmsHeaderScootin {
      nodes {
        name
        navLinks {
          ... on DatoCmsInternalLink {
            id
            anchor
            slug
            model {
              apiKey
            }
          }
          ... on DatoCmsMenuLink {
            id
            anchor
            menuItems {
              anchor
              slug
              id
            }
            model {
              apiKey
            }
          }
        }
        mainAction
        locale
      }
    }
  }
`;

/* 
to adjust when all tabs have to disapear, 3 breakpoints to change : 
  -first grid item last breakpoint
  -third grid item last breakpoint
  -sx_GridTabs last breakpoint
*/
