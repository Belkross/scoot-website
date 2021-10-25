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
      component="article"
      sx={sx_container}
      direction={{ xs: "column", md: direction }}
    >
      <GatsbyImage image={image} style={style_image} alt={alt} />
      <Stack sx={sx_text}>
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
  gap: 6,
};

const sx_text = {
  maxWidth: 550,
  alignItems: "center",
  textAlign: { xs: "center", md: "left" },
  flexShrink: 2,
  gap: 4,
};

const style_image = {
  borderRadius: "50%",
  maxHeight: "400px",
  maxWidth: "400px",
};
