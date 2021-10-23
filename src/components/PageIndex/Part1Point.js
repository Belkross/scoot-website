import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Point({ title, description, illustration }) {
  return (
    <Stack
      sx={sx_container}
      direction={{ xs: "column", sm: "row", md: "column" }}
      spacing={4}
    >
      <Box
        sx={{
          ...sx_illustration,
          backgroundImage: `url(${require(`/src/assets/${illustration}`).default})`,
        }}
      />
      <Stack sx={sx_textStack} spacing={2}>
        <Typography variant="h3" children={title} />
        <Typography children={description} />
      </Stack>
    </Stack>
  );
}

export default Point;

const sx_container = {
  alignItems: { xs: "center", md: "flex-start"},
};

const sx_illustration = {
  width: { xs: 56, sm: 96 },
  height: { xs: 56, sm: 96 },
  backgroundColor: "secondary.main",
  backgroundSize: "contain",
  borderRadius: "50%",
  flexShrink: 0,
};

const sx_textStack = {
  maxWidth: 400,
  textAlign: { xs: "center", sm: "left" },
};
