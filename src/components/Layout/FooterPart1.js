import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function FooterPart1() {
  return (
    <Box sx={sx_container}>
      <Container>
        <Stack sx={sx_content}>
          <Typography
            variant="h3"
            component="h2"
            children="Découvre sans attendre l’application !"
            color="background.default"
            fontSize={{ xs: "1.5rem", sm: "2.3rem" }}
            maxWidth="500px"
          />
          <Stack sx={sx_buttons}>
            <Button
              sx={{
                ...sx_Button,
                backgroundImage: `url(${
                  require(`/src/assets/icons/app-store.svg`).default
                })`,
              }}
            />
            <Button
              sx={{
                ...sx_Button,
                backgroundImage: `url(${
                  require(`/src/assets/icons/google-play.svg`).default
                })`,
              }}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default FooterPart1;

const sx_container = {
  height: 300,
  width: "100%",
  backgroundColor: "primary.dark",
  display: "flex",
};

const sx_content = {
  flexDirection: { xs: "column", md: "row" },
  gap: 3,
  alignItems: "center",
  justifyContent: { xs: "center", md: "space-between" },
  height: "100%",
  textAlign: "center",
};

const sx_buttons = {
  flexDirection: "row",
  flexWrap: { xs: "wrap", 4: "nowrap" },
  gap: 2,
  justifyContent: "center",
};

const sx_Button = {
  height: 55,
  width: 160,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  borderRadius: "5px",
};
