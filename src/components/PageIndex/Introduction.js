import React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function Introduction(props) {
  const { content } = props;
  return (
    <Box
      sx={{
        ...sx_container,
        backgroundImage: {
          xs: `url(${require(`/src/${content.illustration.mobile}`).default})`,
          sm: `url(${require(`/src/${content.illustration.tablet}`).default})`,
          lg: `url(${require(`/src/${content.illustration.desktop}`).default})`,
        },
      }}
    >
      <Stack sx={sx_stack} spacing={3}>
        <Typography
          variant="h1"
          color="background.default"
          children={content.title}
        />
        <Typography color="background.default" children={content.description} />
        <Button variant="contained" children={content.button}></Button>
      </Stack>
    </Box>
  );
}

export default Introduction;

const sx_container = {
  mb: 12,
  height: 650,
  backgroundColor: "background.default",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const sx_stack = {
  maxWidth: 600,
  alignItems: "center",
  px: 3,
  pt: 16, //la taille du conteneur est fixe
  textAlign: { xs: "center", md: "left" },
  mr: { xs: "auto", md: "initial" },
  ml: { xs: "auto", md: "15%" },
};
