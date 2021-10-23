import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconHamburger from "../../assets/icons/IconHamburger.js";
import IconButton from "@mui/material/IconButton";
import LinkMui from "../LinkMui.js";

function AppBarTop(props) {
  return (
    <AppBar position="sticky" component="header">
      <Toolbar>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          <Typography fontSize="1.5rem">Scoot</Typography>
          <Stack
            component="nav"
            direction="row"
            spacing={3}
            alignItems="center"
            display={{ xs: "none", md: "flex" }}
          >
            <LinkMui to="/" children="Accueil" />
            <LinkMui to="/guide/" children="Guide" />
            <LinkMui to="/localisation/" children="Localisation" />
            <LinkMui to="/recrutement/" children="Recrutement" />
            <LinkMui to="/contact/" children="Contact" />
            <Button children="Get scootin" />
          </Stack>
          <IconButton sx={{ visibility: { xs: "visible", md: "hidden" } }}>
            <IconHamburger />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarTop;
