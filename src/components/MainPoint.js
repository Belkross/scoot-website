import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function MainPoint(props) {
  const { title, description, illustration, button, direction } = props;

  return (
    <Stack
      sx={sx_container}
      direction={{ xs: "column", md: direction }}
      spacing={6}
    >
      <Box
        sx={{
          ...sx_illustration,
          backgroundImage: `url(${
            require(`/src/assets/${illustration.relativePath}`).default
          })`,
        }}
      ></Box>
      <Stack sx={sx_text} spacing={4}>
        <Typography variant="h2" children={title} />
        <Typography children={description} />
        <Button children={button} />
      </Stack>
    </Stack>
  );
}

export default MainPoint;

const sx_container = {
  mb: 12,
  alignItems: "center",
};

const sx_illustration = {
  width: { xs: 280, sm: 445 },
  height: { xs: 280, sm: 445 },
  borderRadius: "50%",
  flexShrink: 0,
};

const sx_text = {
  maxWidth: 600,
  alignItems: "center",
  textAlign: { xs: "center", md: "left" },
};
