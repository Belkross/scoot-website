import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

function PointIllustrated(props) {
  const { title, description, illustration, button, direction, alt } = props;
  const image = getImage(illustration);

  return (
    <Stack
      sx={sx_container}
      direction={{ xs: "column", md: direction }}
      spacing={6}
    >
      <GatsbyImage
        image={image}
        style={{
          borderRadius: "50%",
        }}
        alt={alt}
      />
      <Stack sx={sx_text} spacing={4}>
        <Typography variant="h2" children={title} />
        <Typography children={description} />
        <Button children={button} />
      </Stack>
    </Stack>
  );
}

export default PointIllustrated;

const sx_container = {
  mb: 12,
  alignItems: "center",
};

const sx_text = {
  maxWidth: 550,
  alignItems: "center",
  textAlign: { xs: "center", md: "left" },
  flexShrink: 2,
};
