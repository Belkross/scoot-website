import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function PointIllustrationSvg({
  title,
  description,
  illustration,
  illustration_alt,
}) {
  return (
    <Stack component="article" sx={sx_container}>
      <Box
        component="img"
        src={illustration}
        alt={illustration_alt}
      />
      <Stack sx={sx_text}>
        <Typography variant="h3" children={title} />
        <Typography children={description} />
      </Stack>
    </Stack>
  );
}

const sx_container = {
  alignItems: { xs: "center", md: "flex-start" },
  flexDirection: { xs: "column", sm: "row", md: "column" },
  gap: 4,
};

const sx_text = {
  maxWidth: 400,
  textAlign: { xs: "center", sm: "left" },
  gap: 2,
};
